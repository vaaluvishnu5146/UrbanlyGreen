import {
  IonContent,
  IonPage,
  IonLabel,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Dashboard.scss";
//COMPONENTS
import NavBar from "../../components/NavBar/NavBar";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <NavBar label="DashBoard"/>
        <div className="pageContainer">
          <IonLabel className="pageHeading">Quick Insights</IonLabel>
          {/* <IonCard>Today's Insights</IonCard> */}
          <IonGrid>
            <IonRow>
              <IonCol sizeLg="4" sizeMd="4" sizeXs="6">
                <IonCard className="analyticsCard">
                  <IonLabel className="">Total Listings</IonLabel>
                  <IonLabel className="numbers">10</IonLabel>
                </IonCard>
              </IonCol>
              <IonCol sizeLg="4" sizeMd="4" sizeXs="6">
                <IonCard className="analyticsCard">
                  <IonLabel className="">Total Earnings</IonLabel>
                  <IonLabel className="numbers">30,000</IonLabel>
                </IonCard>
              </IonCol>
              <IonCol sizeLg="4" sizeMd="4" sizeXs="6">
                <IonCard className="analyticsCard">
                  <IonLabel className="">Total Orders</IonLabel>
                  <IonLabel className="numbers">100</IonLabel>
                </IonCard>
              </IonCol>
              <IonCol sizeLg="4" sizeMd="4" sizeXs="6">
                <IonCard className="analyticsCard">
                  <IonLabel className="">Total Order Cancelations</IonLabel>
                  <IonLabel className="numbers">20</IonLabel>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
