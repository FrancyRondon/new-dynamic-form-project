import { Container, Navbar } from "react-bootstrap";



export default function NavbarMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#!">
                Dynamic <b>Form</b>
            </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
