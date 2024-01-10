import { Todo } from "src/components/Main"
import { GlobalStyle } from "./styles/global-styles"
import { Header } from "./components/Header"

const App: React.FC = () => {

  return (
    <>
      <Header />
      <GlobalStyle />
      <Todo />
    </>
  )
}

export {App}