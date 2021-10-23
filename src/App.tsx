import { Provider } from "react-redux"
import { Home } from "./pages/home"
import { store } from "./redux/store"


export const App:React.FC = () => {
  return (
    <div className="layout">
      <div className="wrapper">
        <Provider store={store}>
          <Home/>
        </Provider>
      </div>
    </div>
  )
}

