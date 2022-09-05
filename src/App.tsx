import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header } from "./components/header"
import { Favorites } from "./pages/favorites"
import { Home } from "./pages/home"
import { store } from "./redux/store"

export const App: React.FC = () => {
	return (
		<div className="layout">
			<div className="wrapper">
				<Provider store={store}>
					<Router>
						<Header />
						<Switch>
							<Route exact={true} component={Home} path="/" />
							<Route exact={true} component={Favorites} path="/favorites" />
						</Switch>
					</Router>
				</Provider>
			</div>
		</div>
	)
}
