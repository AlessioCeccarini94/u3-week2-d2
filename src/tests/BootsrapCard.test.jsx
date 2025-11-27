import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import BookList from "../Components/BookList"
import CommentArea from "../Components/CommentArea"
import books from "../Data/fantasy.json"

describe("Testing cards", () => {
  it("Should mount same number of cards as array length", () => {
    render(<BookList />)
    const cards = screen.getAllByTestId("book-card")
    expect(cards.length).toBe(books.length)
  })
  it("Should be mounted", () => {
    render(<CommentArea />)
    const commentArea = screen.getByTestId("comment-area")
    expect(commentArea).toBeInTheDocument()
  })
})
