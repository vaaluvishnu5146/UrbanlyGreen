import React, { useEffect, useState } from 'react';
import {addCircle, chevronDownCircleOutline} from 'ionicons/icons';
import { IonRefresher, IonRefresherContent, IonAlert, IonContent, IonGrid, IonPage, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonList, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonImg, IonButtons, IonBackButton, IonText, IonLoading } from '@ionic/react';
import "./Listings.scss";
import { RefresherEventDetail } from '@ionic/core';
import NavBar from '../../components/NavBar/NavBar';
import { getListings } from '../../Services/DataService';
import { ProductResponse } from '../../interfaces/response.interface';
import { ProductState } from '../../interfaces/states.interface';
const Listings: React.FC = () => {
  const [state, setState] = useState<ProductState>({loading: true, data: [], error: false});
  const fetchData = async () => {
    let response: ProductResponse = await getListings("a8cf25be7d3c96d7c9ebe9d894b7bda1");
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
      <NavBar label="My Listings"/>
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
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
  <IonFabButton href="/home/listings/add-product">
    <IonIcon icon={addCircle} />
  </IonFabButton>
</IonFab>
</IonPage>
  );
};

export default Listings;
