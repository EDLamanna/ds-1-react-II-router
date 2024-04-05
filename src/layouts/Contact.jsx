import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <header>
        <h1>Cuentanos, ¿En qué te podemos ayudar?</h1>
      </header>
      <main>
        <Form>
          <Form.Group className="formInputs" controlId="formBasicFullName">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce tu nombre completo"
            />
          </Form.Group>

          <Form.Group className="formInputs" controlId="formBasicEmail">
            <Form.Label>Dirección de correo</Form.Label>
            <Form.Control type="email" placeholder="Introduce tu email" />
          </Form.Group>

          <Form.Group className="formInputs" controlId="formBasicPhone">
            <Form.Label>Numero de teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce tu numero de teléfono"
            />
          </Form.Group>

          <Button className="fs-4" variant="danger" type="submit">
            Enviar
          </Button>
        </Form>
      </main>
    </>
  );
};

export default Contact;
