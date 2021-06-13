import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Storage } from '@ionic/storage';
import { getDataFromStore, openStorage } from "./Services/UtilServices";

const store = new Storage();

const App: React.FC = () => {

  const [authenticated, setAuthenticated] = useState({loggedIn: false, loading: true});
  console.log(authenticated)
  useEffect( () => {
    
    openStorage(store).then( () => {
      store.clear().then(o =>
      getDataFromStore(store, 'user').then((user) => {
        if(user && user.isAuthenticated) {
          console.log(user)
          setAuthenticated({loggedIn: true, loading: false})
        } else {
          setAuthenticated({loggedIn: false, loading: false})
        }
      })
      )
    })
  }, [])
  return (
  <IonApp>
    {!authenticated.loading && !authenticated.loggedIn ?
      <Login setAuthenticated={setAuthenticated}/> :
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home}/>
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    }
    
  </IonApp>
  )};

export default App;
