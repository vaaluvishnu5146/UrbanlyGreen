import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonImg,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonBackButton,
  IonButtons,
  IonToolbar,
  IonHeader,
  IonTitle,
} from "@ionic/react";
import "./Store.scss";
import NavBar from "../../components/NavBar/NavBar";

const Store: React.FC = () => {
  const [getListedProducts, setListedProducts] = useState([
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product1",
      "category": "CategoryA",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur pariatur"
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product2",
      "category": "CategoryB",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur pariatur id libero"
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product6",
      "category": "CategoryB",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel "
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product3",
      "category": "CategoryA",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, "
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product4",
      "category": "CategoryA",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos maxime vel reiciendis consequatur, consectetur"
    },
    {
      "imgUrl": "/assets/images/product.png",
      "name": "Product5",
      "category": "CategoryD",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui nam dignissimos "
    }
  ]);
  return (
    <IonPage>
      <IonContent fullscreen>
      <NavBar label="Store"/>
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
                </IonCard>
            </IonCol>
            ))}
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Store;
