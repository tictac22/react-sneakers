import { renderHook } from "@testing-library/react-hooks"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { useGetAllItems } from "../components/hooks/getItems"

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

describe("useGetAllItems hooks", () => {
	it("gets data", async () => {
		const { result, waitForNextUpdate } = renderHook(() => useGetAllItems())

		await waitForNextUpdate()

		expect(result.current.isLoading).toBeFalsy()
		expect(result.current.isError).toBeFalsy()
		expect(result.current.cartItems[0].title).toEqual("Nike Blazer Mid '77 Vintage Men's")
	})
})
