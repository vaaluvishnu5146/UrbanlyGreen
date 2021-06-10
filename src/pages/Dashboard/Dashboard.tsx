import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonBadge,
  IonTab,
  IonRouterOutlet,
} from "@ionic/react";
import "./Dashboard.scss";
import {
  pricetagsOutline,
  readerOutline,
  home,
  cartOutline,
} from "ionicons/icons";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import { IonReactRouter } from "@ionic/react-router";
import Cart from "../Cart/Cart";
import Store from "../Store/Store";
import Listings from "../Listings/Listings";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/dashboard" component={Home} exact={true} />
            <Route path="/listings" component={Listings} exact={true} />
            <Route path="/store" component={Store} exact={true} />
            <Route path="/cart" component={Cart} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/dashboard">
              <IonLabel>Home</IonLabel>
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="listings" href="/listings">
              <IonLabel>Listings</IonLabel>
              <IonIcon icon={readerOutline} />
            </IonTabButton>
            <IonTabButton tab="store" href="/store">
              <IonLabel>Store</IonLabel>
              <IonIcon icon={pricetagsOutline} />
            </IonTabButton>
            <IonTabButton tab="cart" href="/cart">
              <IonLabel>Cart</IonLabel>
              <IonIcon icon={cartOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};

export default Dashboard;
