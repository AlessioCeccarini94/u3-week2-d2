import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from "react"
import HeaderPage from "./Components/HeaderPage"
import FooterPage from "./Components/FooterPage"
import fantasy from "./Data/fantasy.json"
import BookList from "./Components/BookList"
import AlertPage from "./Components/AlertPage"

class App extends Component {
  render() {
    return (
      <>
        <HeaderPage />
        <AlertPage />
        <BookList books={fantasy} />
        <FooterPage />
      </>
    )
  }
}
export default App
