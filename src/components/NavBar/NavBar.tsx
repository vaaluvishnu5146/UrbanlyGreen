import React from "react";
import { IonCard, IonIcon } from "@ionic/react";
import "./NavBar.scss";
import { notificationsOutline, cartOutline } from "ionicons/icons";

const Store: React.FC = () => {
  return (
    <div className="navbarContainer">
      <IonCard className="navBar">
        <IonIcon icon={notificationsOutline} />
        <IonIcon icon={cartOutline} />
      </IonCard>
    </div>
  );
};

export default Store;
