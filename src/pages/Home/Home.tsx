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
import "./Home.scss";
import {
  pricetagsOutline,
  readerOutline,
  home,
  cartOutline,
} from "ionicons/icons";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import Cart from "../Cart/Cart";
import Store from "../Store/Store";
import ListingRoutes from "../Listings/ListingRoutes";
import Dashboard from "../Dashboard/DashBoard";

const Home: React.FC<RouteComponentProps> = ({ match }) => {
  console.log("Home")
  return (
    <IonPage>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={`${match.url}/dashboard`} component={Dashboard} />
            <Route path={`${match.url}/listings`} component={ListingRoutes}/>
            <Route path={`${match.url}/store`} component={Store} />
            <Route path={`${match.url}/cart`} component={Cart} />
            <Redirect exact from={match.url} to={`${match.url}/dashboard`} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/home/dashboard">
              <IonLabel>Home</IonLabel>
              <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="listings" href="/home/listings">
              <IonLabel>Listings</IonLabel>
              <IonIcon icon={readerOutline} />
            </IonTabButton>
            <IonTabButton tab="store" href="/home/store">
              <IonLabel>Store</IonLabel>
              <IonIcon icon={pricetagsOutline} />
            </IonTabButton>
            <IonTabButton tab="cart" href="/home/cart">
              <IonLabel>Cart</IonLabel>
              <IonIcon icon={cartOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonPage>
  );
};

export default Home;
