import { describe, it, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import BookList from "../Components/BookList"
import fantasy from "../Data/fantasy.json"

describe("Testing cards", () => {
  it("Should change border to red after click", () => {
    render(<BookList books={fantasy} />)
    const card = screen.getAllByTestId("card")[0]
    fireEvent.click(card.querySelector("img"))
    expect(card).toHaveClass("selected")
  })
})
