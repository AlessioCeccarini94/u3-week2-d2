import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import HeaderPage from "../Components/HeaderPage"

describe("Testing navbar", () => {
  it("Should be mounted", () => {
    render(<HeaderPage />)
    const navbar = screen.getByRole("navigation")
    expect(navbar).toBeInTheDocument()
  })
})
