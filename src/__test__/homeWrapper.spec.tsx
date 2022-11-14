import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { HomeWrapper } from "../components/pagesComponents/homeWrapper"
import { CombinedRender } from "./helpers/combinedRender"

const fakeData = [
	{
		title: "Nike Blazer Mid '77 Vintage Men's",
		price: 215,
		img: "img1",
		id: "3YuQN5SNO0ioX6adbAk3eQ",
	},
	{
		title: "Men's Nike Air Max 270",
		price: 260,
		img: "img2",
		id: "jRFlfF6IukWair2Jl_z",
	},
]
const handlers = [
	rest.get("https://631527a95b85ba9b11dcd427.mockapi.io/sneakers", (req, res, ctx) => {
		return res(ctx.json(fakeData))
	}),
]
export const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
describe("Home Wrapper", () => {
	it("renders succesfully", async () => {
		const view = CombinedRender({ children: <HomeWrapper />, store: {} })
		expect(screen.getAllByLabelText("loading")[0]).toBeInTheDocument()
		await waitFor(() => screen.getByLabelText("Nike Blazer Mid '77 Vintage Men's"))

		expect(view.asFragment()).toMatchSnapshot()
	})

	it("fails render", async () => {
		server.use(
			rest.get("https://631527a95b85ba9b11dcd427.mockapi.io/sneakers", (req, res, ctx) => {
				return res(ctx.status(500))
			})
		)
		const view = CombinedRender({ children: <HomeWrapper />, store: {} })
		expect(screen.getAllByLabelText("loading")[0]).toBeInTheDocument()

		await waitFor(() => screen.getByLabelText("error"))

		expect(view.asFragment()).toMatchSnapshot()
	})
	it("filters by input", async () => {
		const view = CombinedRender({ children: <HomeWrapper />, store: {} })
		await waitFor(() => screen.getByLabelText("Men's Nike Air Max 270"))

		await userEvent.type(screen.getByPlaceholderText("Searching..."), "Nike Blazer")

		expect(screen.queryByLabelText("Men's Nike Air Max 270")).not.toBeInTheDocument()

		expect(view.asFragment()).toMatchSnapshot()
	})
})
