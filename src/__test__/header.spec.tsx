import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { Header } from "../components/header/index"
import { CombinedRender } from "./helpers/combinedRender"

const fakeStore = {
	shop: {
		totalPrice: 30000,
		favoritesItems: [],
		shopItems: [],
	},
}

describe("Header component", () => {
	beforeEach(() => {
		CombinedRender({ children: <Header />, store: fakeStore })
	})
	it("mounts", () => {
		expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
	})
	it("shows mobile menu", async () => {
		const button = screen.getByLabelText("open menu")
		expect(button).toBeInTheDocument()

		await userEvent.click(button)

		expect(screen.getByTestId("openedMenu")).toBeInTheDocument()
	})
})
