import { describe, it, expect } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { useState } from "react"
import SingleBook from "../Components/SingleBook"

const FakeCard = () => {
  const [selected, setSelected] = useState(false)
  return (
    <SingleBook
      changeState={() => setSelected(true)}
      title="book"
      img="https://placebear.com/200/300"
      price="10"
      asin="1234"
      selected={selected}
    />
  )
}

describe("Testing cards", () => {
  it("Should change border to red after click", async () => {
    render(<FakeCard />)

    const img = screen.getByRole("img")
    fireEvent.click(img)

    await waitFor(() => {
      const card = screen.getByTestId("card")
      expect(card).toHaveClass("selected")
    })
  })
})
