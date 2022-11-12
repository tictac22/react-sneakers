import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react" // (or /dom, /vue, ...)
import { Counter } from "../components/counter"

describe("counter", () => {
	beforeEach(() => {
		render(<Counter />)
	})
	it("mounts", () => {
		expect(screen.getByText("Counter: 0")).not.toBeNull()
	})

	it("increments", () => {
		const incrementButton = screen.getByText("increment")

		fireEvent.click(incrementButton)

		expect(screen.getByText("Counter: 1")).toBeInTheDocument()
	})

	it("decrements", () => {
		const decrementButton = screen.getByText("decrement")

		fireEvent.click(decrementButton)

		expect(screen.getByText("Counter: -1")).toBeInTheDocument()
	})
})
