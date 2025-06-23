import "../src/styles/App.scss"
import Header from "./components/Header"
import About from "./components/About"
import Stack from "./components/Stack"
import Prod from "./components/Prod"
import ToTop from "./components/ToTop"
import Transition from "./components/Transition"

export default function App() {

  return (
    <>
      <Header />
      <About />
      <Transition />
      <Stack />
      <Transition />
      <Prod />
      <ToTop />
    </>
  )
}