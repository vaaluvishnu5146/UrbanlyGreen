import { IonContent, IonPage, IonLabel } from "@ionic/react";
import NavBar from "../../components/NavBar/NavBar";

const Cart: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <NavBar label="Cart"/>
        <IonLabel>Cart Page</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
