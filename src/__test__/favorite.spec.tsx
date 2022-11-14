import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { Favorite } from "../components/cart/favorite"
import { renderWithRedux } from "./helpers/renderWithRedux"

const fakeStore = {
	shop: {
		totalPrice: 30000,
		favoritesItems: [{ title: "my favorite", id: "1" }],
		shopItems: [],
	},
}

const shopItem = {
	title: "lol",
	img: "image",
	price: 30000,
	id: "1",
}
describe("Favorite component", () => {
	it("renders unvfavorite", async () => {
		renderWithRedux({ children: <Favorite {...shopItem} />, store: fakeStore })

		expect(screen.getByAltText("unfavorite")).toBeInTheDocument()

		await userEvent.click(screen.getByLabelText("to favorite"))
		expect(screen.getByAltText("favorite")).toBeInTheDocument()
	})
	it("renders favorite ", async () => {
		shopItem.title = "my favorite"
		renderWithRedux({ children: <Favorite {...shopItem} />, store: { ...fakeStore } })

		expect(screen.getByAltText("favorite")).toBeInTheDocument()

		await userEvent.click(screen.getByLabelText("to favorite"))

		expect(screen.getByAltText("unfavorite")).toBeInTheDocument()
	})
})
