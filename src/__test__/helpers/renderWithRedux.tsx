import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "../../redux/store"

type Props = {
	children: React.ReactNode
	store: {}
}

export const renderWithRedux = ({ children, store }: Props) => {
	return render(<Provider store={createStore(store)}>{children}</Provider>)
}
