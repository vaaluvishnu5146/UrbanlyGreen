import React, { useEffect, useState } from 'react';
import {addCircle} from 'ionicons/icons';
import { IonAlert, IonContent, IonGrid, IonPage, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonList, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonImg, IonButtons, IonBackButton, IonText, IonLoading } from '@ionic/react';
import "./Listings.scss";
import NavBar from '../../components/NavBar/NavBar';
import { Product } from '../../interfaces/data.interface';
import { getListings } from '../../Services/DataService';
import { ProductResponse } from '../../interfaces/response.interface';
import { stat } from 'fs';
const Listings: React.FC = () => {
  interface State {
    loading: boolean,
    data: Product[],
    error: boolean
  } 
  // const [getListedProducts, setListedProducts] = useState([
  //   {
  //     "imgUrl": "/assets/images/product.png",
  //     "name": "Product1",
  //     "category": "CategoryA",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur pariatur",
  //     "price": 20
  //   },
  //   {
  //     "imgUrl": "/assets/images/product.png",
  //     "name": "Product2",
  //     "category": "CategoryB",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur pariatur id libero",
  //     "price": 33
  //   },
  //   {
  //     "imgUrl": "/assets/images/product.png",
  //     "name": "Product6",
  //     "category": "CategoryB",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel ",
  //     "price": 46
  //   },
  //   {
  //     "imgUrl": "/assets/images/product.png",
  //     "name": "Product3",
  //     "category": "CategoryA",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, ",
  //     "price": 15
  //   },
  //   {
  //     "imgUrl": "/assets/images/product.png",
  //     "name": "Product4",
  //     "category": "CategoryA",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur",
  //     "price": 20
  //   },
  //   {
  //     "imgUrl": "/assets/images/product.png",
  //     "name": "Product6",
  //     "category": "CategoryD",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos ",
  //     "price": 20
  //   },
  //   {
  //     "imgUrl": "/assets/images/product.png",
  //     "name": "Product6",
  //     "category": "CategoryD",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos ",
  //     "price": 20
  //   },
  //   {
  //     "imgUrl": "/assets/images/product.png",
  //     "name": "Product5",
  //     "category": "CategoryD",
  //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos ",
  //     "price": 20
  //   }
  // ]);
  const [state, setState] = useState<State>({loading: true, data: [], error: false});

  useEffect(() => {
    const fetchData = async () => {
      let response: ProductResponse = await getListings("a8cf25be7d3c96d7c9ebe9d894b7bda1");
      setState({loading: false, data: response.data, error: response.error});
    };
    fetchData();
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
      <NavBar label="Listings"/>
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
