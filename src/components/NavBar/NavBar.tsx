import React, { useState } from "react";
import { IonAlert, IonBackButton, IonButtons, IonCard, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import "./NavBar.scss";
import { notificationsOutline, cartOutline, arrowBack, logOutOutline } from "ionicons/icons";
interface NavBarProps {
  label?: string;
  canGoBack?: boolean;
}


const NavBar: React.FC<NavBarProps> = ( props ) => {

  const [logOutModal, setLogoutModal] = useState(false)
  const logOutFunction = () => {
    localStorage.clear();
    window.location.reload();
    
  }
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
        <IonAlert
          isOpen={logOutModal}
          message='Are you sure...'
          onDidDismiss={() => setLogoutModal(false)}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Ok',
              handler: () => {
                logOutFunction()
              }
            }
          ]}
        />
        <IonTitle>{props.label}</IonTitle>
        <IonButtons slot="end">
          <IonIcon icon={notificationsOutline} />
        </IonButtons>
        <IonButtons slot="secondary" onClick={() => setLogoutModal(true)}>
          <IonIcon icon={logOutOutline} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

NavBar.defaultProps = {
  canGoBack: true
}

export default NavBar;
