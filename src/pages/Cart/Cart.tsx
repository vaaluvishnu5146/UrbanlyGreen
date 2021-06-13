import { IonContent, IonPage, IonText } from "@ionic/react";
import NavBar from "../../components/NavBar/NavBar";

const Cart: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <NavBar label="Cart"/>
        <img src="/assets/images/cart-soon.png"/>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
