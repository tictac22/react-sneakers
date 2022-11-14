import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { NavBar } from "../components/header/navbar"
import { CombinedRender } from "./helpers/combinedRender"
const fakeStore = {
	shop: {
		totalPrice: 30000,
		favoritesItems: [],
		shopItems: [],
	},
}
// jest.mock("react-router-dom", () => ({
// 	useHistory: () => jest.fn(),
// }))
describe("Header navbar component", () => {
	it("mounts", () => {
		CombinedRender({ children: <NavBar mobile={false} />, store: fakeStore })
		expect(screen.getByText("Favorite")).toBeInTheDocument()
	})

	it("goes to new page", async () => {
		CombinedRender({ children: <NavBar mobile={false} />, store: fakeStore })
		await userEvent.click(screen.getByLabelText("go to favorite"))

		expect(screen.getByTestId("true")).toBeInTheDocument()
	})
})
