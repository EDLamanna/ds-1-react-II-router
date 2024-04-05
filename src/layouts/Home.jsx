import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Ricas tortas por encargo</h1>
      </header>
      <main>
        <CardGroup>
          <Card className="cardProduct">
            <Card.Img
              className="cardImg"
              variant="top"
              src="src\assets\imgs\selva-negra.jpeg"
            />
            <Card.Body>
              <Card.Title>Selva Negra</Card.Title>
              <Card.Text>
                ¡Deléitate con nuestra exquisita torta Selva Negra! Capas
                esponjosas de chocolate, relleno de crema y cerezas, cubierta
                con virutas de chocolate. ¡Una explosión de sabor irresistible!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardProduct">
            <Card.Img
              className="cardImg"
              variant="top"
              src="src\assets\imgs\torta-tiramisu.jpeg"
            />
            <Card.Body>
              <Card.Title>Tiramisú</Card.Title>
              <Card.Text>
                Descubre nuestra tentadora torta Tiramisú: capas de bizcocho
                empapado en café, cremoso mascarpone y un toque de cacao en
                polvo. ¡Una experiencia italiana inolvidable en cada bocado!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardProduct">
            <Card.Img
              className="cardImg"
              variant="top"
              src="src\assets\imgs\tres-leches.jpeg"
            />
            <Card.Body>
              <Card.Title>tres Leches</Card.Title>
              <Card.Text>
                Disfruta de nuestra irresistible torta Tres Leches: suave
                bizcocho bañado en una mezcla de tres leches, cubierto con crema
                batida y decorado con fresas frescas. ¡Una indulgencia cremosa y
                deliciosa!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </main>
    </div>
  );
};

export default Home;
