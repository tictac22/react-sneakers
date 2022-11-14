import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "../../redux/store"

export const renderWithRedux = (children: React.ReactNode, store: {}) => {
	return render(<Provider store={createStore(store)}>{children}</Provider>)
}
