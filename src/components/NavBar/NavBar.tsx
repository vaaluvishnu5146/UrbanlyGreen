import React from "react";
import { IonBackButton, IonButtons, IonCard, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import "./NavBar.scss";
import { notificationsOutline, cartOutline, arrowBack } from "ionicons/icons";

interface NavBarProps {
  label?: string;
  canGoBack?: boolean;
}
const NavBar: React.FC<NavBarProps> = ( props ) => {
  return (
    <IonHeader translucent>
      <IonToolbar>
        <IonButtons slot="start">
          { props.canGoBack ?
            <IonBackButton defaultHref="/home">
              <IonIcon icon={arrowBack} />
            </IonBackButton> : <></>
          }
        </IonButtons>
        <IonTitle>{props.label}</IonTitle>
        <IonButtons slot="end">
          <IonIcon icon={notificationsOutline} />
        </IonButtons>
        <IonButtons slot="secondary">
          <IonIcon icon={cartOutline} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

NavBar.defaultProps = {
  canGoBack: true
}

export default NavBar;
