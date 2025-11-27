import { describe, it, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Wrapper from "../Components/Wrapper"

describe("Testing cards", () => {
  it("Should change border to red after click", () => {
    render(<Wrapper />)

    const img = screen.getByRole("img") // clicchiamo l'immagine
    fireEvent.click(img)

    const card = screen.getByTestId("card")

    expect(card).toHaveStyle({ border: "3px solid red" })
  })
})
