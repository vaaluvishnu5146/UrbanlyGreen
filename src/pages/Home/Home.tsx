import { IonContent, IonPage, IonLabel } from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonLabel>Home Page</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Home;
