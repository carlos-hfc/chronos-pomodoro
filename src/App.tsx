import "./styles/theme.css"
import "./styles/global.css"

import { Container } from "./components/Container"
import { Countdown } from "./components/Countdown"
import { Form } from "./components/Form"
import { Input } from "./components/Input"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <Form className="form">
          <div className="formRow">
            <Input id="input" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </Form>
      </Container>
    </>
  )
}
