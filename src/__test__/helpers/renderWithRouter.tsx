import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router"

type Params = {
	children: React.ReactNode
}
export const renderWithRouter = ({ children }: Params) => {
	return render(<MemoryRouter>{children}</MemoryRouter>)
}
