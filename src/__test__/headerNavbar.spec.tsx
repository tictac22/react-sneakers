import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import { NavBar } from "../components/header/navbar"
import * as reduxHooks from "../redux/hooks"
import * as reduxActions from "../redux/slicers/menu"
import { renderWithRouter } from "./helpers/renderWithRouter"

const enum AriaLabels {
	closeMenu = "close menu",
	showCart = "show cart",
	goToFavorite = "go to favorite",
}

const fakeStore = {
	shop: {
		totalPrice: 30000,
		favoritesItems: [],
		shopItems: [],
	},
}

jest.mock("../redux/hooks")
const dispatch = jest.fn()
jest.mocked(reduxHooks).useAppSelector.mockReturnValue(fakeStore)
jest.mocked(reduxHooks).useAppDispatch.mockImplementation(() => dispatch)

const mockedCheckMobileMenu = jest.spyOn(reduxActions, "checkMobileMenu")
const mockedCheckMenu = jest.spyOn(reduxActions, "checkMenu")
describe("Header navbar component", () => {
	afterEach(() => {
		dispatch.mockClear()
	})
	it("mounts", () => {
		const { view } = renderWithRouter({ children: <NavBar mobile={false} /> })
		expect(screen.getByText("Favorite")).toBeInTheDocument()
		expect(view.asFragment()).toMatchSnapshot()
	})

	it("show the cart", async () => {
		renderWithRouter({ children: <NavBar mobile={false} /> })
		await userEvent.click(screen.getByLabelText(AriaLabels.showCart))

		expect(dispatch).toBeCalledTimes(2)

		expect(mockedCheckMenu).toBeCalledWith(true)
		expect(mockedCheckMobileMenu).toBeCalledWith(false)
	})
	it("closes mobile menu", async () => {
		renderWithRouter({ children: <NavBar mobile={false} /> })

		await userEvent.click(screen.getByLabelText(AriaLabels.closeMenu))

		expect(dispatch).toBeCalledTimes(1)

		expect(mockedCheckMobileMenu).toBeCalledWith(false)
	})
	it("goes to favorites", async () => {
		const { history } = renderWithRouter({ children: <NavBar mobile={false} /> })
		await userEvent.click(screen.getByLabelText(AriaLabels.goToFavorite))
		expect(history.location.pathname).toEqual("/favorites")

		expect(dispatch).toBeCalledTimes(1)
		expect(mockedCheckMobileMenu).toBeCalledWith(false)
	})
})
