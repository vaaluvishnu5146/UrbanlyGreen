import React, { useState } from 'react';
import {addCircle} from 'ionicons/icons';
import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonList, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonImg, IonButtons, IonBackButton, IonText } from '@ionic/react';
import "./Listings.scss";
import NavBar from '../../components/NavBar/NavBar';
const Listings: React.FC = () => {
  const [getListedProducts, setListedProducts] = useState([
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product1",
      "category": "CategoryA",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur pariatur",
      "price": 20
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product2",
      "category": "CategoryB",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur pariatur id libero",
      "price": 33
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product6",
      "category": "CategoryB",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel ",
      "price": 46
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product3",
      "category": "CategoryA",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, ",
      "price": 15
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product4",
      "category": "CategoryA",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur",
      "price": 20
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product6",
      "category": "CategoryD",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos ",
      "price": 20
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product6",
      "category": "CategoryD",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos ",
      "price": 20
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product5",
      "category": "CategoryD",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos ",
      "price": 20
    }
  ]);
  return (
    <IonPage>
      <IonContent fullscreen>
      <NavBar label="Listings"/>
        <IonGrid>
          <IonRow>
            {getListedProducts.map((data, index) => (
              <IonCol key={index} sizeLg="4" sizeMd="6" sizeXs="6">
                <IonCard button={true}>
                  <div className="imageWrapper">
                    <IonImg src={data.imgUrl}/>
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
        </IonGrid>
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
