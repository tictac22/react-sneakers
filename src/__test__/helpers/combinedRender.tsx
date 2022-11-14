import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router"
import { createStore } from "../../redux/store"

type Params = {
	children: React.ReactNode
	store: {}
}
export const CombinedRender = ({ children, store }: Params) => {
	return render(
		<MemoryRouter>
			<Provider store={createStore(store)}>{children}</Provider>
		</MemoryRouter>
	)
}
