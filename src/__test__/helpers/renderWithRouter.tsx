import { render } from "@testing-library/react"
import { createMemoryHistory } from "history"
import { Router } from "react-router"

type Params = {
	children: React.ReactNode
}
export const renderWithRouter = ({ children }: Params) => {
	const history = createMemoryHistory()
	return {
		view: render(<Router history={history}>{children}</Router>),
		history,
	}
}
