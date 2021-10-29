
import { Provider } from "react-redux"

import { store } from "./redux/store"

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/home"
import { Favorites } from "./pages/favorites";

export const App:React.FC = () => {
  return (
    <div className="layout">
      <div className="wrapper">
        <Provider store={store}>
          <Router>
            <Switch>
                <Route exact={true} component={Home} path="/"/>
                <Route exact={true} component={Favorites} path="/favorites"/>
            </Switch>
            </Router>
        </Provider>
      </div>
    </div>
  )
}

