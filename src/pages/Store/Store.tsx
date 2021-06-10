import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from "@ionic/react";
import "./Store.scss";

const Store: React.FC = () => {
  const [getProducts, setProducts] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
    "Product 9",
  ]);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {getProducts.map((data, index) => (
              <IonCol key={index} sizeLg="4" sizeMd="4" sizeXs="6">
                <IonCard>{data}</IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Store;
