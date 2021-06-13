import React, { useEffect, useState } from "react";
import "./ServicePage.scss";
import {
  IonContent,
  IonPage,
  IonLoading,
  IonAlert,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonSearchbar
} from "@ionic/react";
import NavBar from "../../components/NavBar/NavBar";
import { State } from "ionicons/dist/types/stencil-public-runtime";
import { ServiceState } from "../../interfaces/states.interface";
import { ServiceResponse } from "../../interfaces/response.interface";
import { RefresherEventDetail } from '@ionic/core';
import { getAllServices } from "../../Services/DataService";

const ServicePage: React.FC = () => {

  const [state, setState] = useState<ServiceState>({loading: true, data: [], error: false});
  const [searchText, setSearchText] = useState('Services within 5 KM')
  const fetchData = async () => {
    let response: ServiceResponse = await getAllServices();
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
        <>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonList lines="full">
          { state.data.map((data, index) => (
          <IonItem key={index} button>
            <IonThumbnail slot="start" className="ion-no-padding">
              <img src= {"/assets/images/services.png"}/>
            </IonThumbnail>
            <IonLabel>
              Business Name: {data.businessName}
              <p>Contact Person: {data.name}</p>
              <p>{`${Number(data.inspectionFee) == 0 ? 'Free Inspection' : 'Inspection Cost: '+data.inspectionFee}`}</p>
              <p>Service: {data.serviceType}</p>
            </IonLabel>
          </IonItem>
          ))}
        </IonList> </>: <></> }
      </IonContent>
    </IonPage>
  );
};

export default ServicePage;
