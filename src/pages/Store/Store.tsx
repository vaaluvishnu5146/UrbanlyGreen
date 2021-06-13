import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonLoading,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonImg,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonAlert,
  IonRefresher,
  IonRefresherContent
} from "@ionic/react";
import "./Store.scss";
import NavBar from "../../components/NavBar/NavBar";
import { ProductState } from "../../interfaces/states.interface";
import { ProductResponse } from "../../interfaces/response.interface";
import { getAllProducts } from "../../Services/DataService";
import { RefresherEventDetail } from '@ionic/core';
const Store: React.FC = () => {

  const [state, setState] = useState<ProductState>({loading: true, data: [], error: false});
  const fetchData = async () => {
    let response: ProductResponse = await getAllProducts();
    setState({loading: false, data: response.data, error: response.error});
  };
  const doRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    console.log("Refresh Complete");
    fetchData().then( o =>
      event.detail.complete()
    )
  }
  useEffect(() => {
    setState({loading: true, data: [], error: false});
    fetchData();
  }, []);
  return (
    <IonPage>
      <NavBar label="Store"/>
      <IonContent fullscreen>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent>
        </IonRefresherContent>
      </IonRefresher>
      <IonLoading
        cssClass="custom-loader"
        isOpen={state.loading}
        message={'Please wait...'}
      />
      <IonAlert
        isOpen={state.error}
        header={"No Connection"}
        message={"Unable to retrieve Listed Products"}
      />
      {!state.loading && !state.error ? 
        <IonGrid>
          <IonRow>
            {state.data.map((data, index) => (
              <IonCol key={index} sizeLg="4" sizeMd="6" sizeXs="6">
                <IonCard button={true}>
                  <div className="imageWrapper">
                    <IonImg src={"/assets/images/product.png"}/>
                  </div>
                  <IonCardHeader>
                    <IonCardSubtitle>{data.category}</IonCardSubtitle>
                    <IonCardTitle>{data.name}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {String(data.description).length >50 ? String(data.description).substring(0,50)+"..." : String(data.description)}
                  </IonCardContent>
                  <IonCardContent>
                    ₹<span>{data.price}</span>
                  </IonCardContent>
                </IonCard>
            </IonCol>
            ))}
            </IonRow>
        </IonGrid> : <></> }
      </IonContent>
    </IonPage>
  );
};

export default Store;
