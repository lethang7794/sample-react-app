import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroupItem, ListGroup, Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Message name="Jesus" yearOfBirth={0} />
        <List list={allItems} />
        <FruitCard
          description={fruits[0].description}
          name={fruits[0].name}
          emoji={fruits[0].emoji}
          price={fruits[0].price}
        />
      </Container>
    </div>
  );
}

/* A message */
const Message = ({ name, yearOfBirth, }) => {
  return (
    <h3 className="text-center">
      Hi {name}, you are {2021 - yearOfBirth} years old.
    </h3>
  );
};

/* A list of things */
const allItems = [
  { id: 'apple', value: '🍎' },
  { id: 'orange', value: '🍊' },
  { id: 'grape', value: '🍇' },
  { id: 'pear', value: '🍐' },
];

const Item = ({ id, value }) => {
  return (
    <ListGroupItem>
      {id}: {value}
    </ListGroupItem>
  );
};

const List = ({ list }) => {
  return (
    <ListGroup style={{ width: '12rem' }}>
      {list.map((item) => (
        <Item id={item.id} value={item.value} />
      ))}
    </ListGroup>
  );
};

/* A list of fruit cards */
const fruits = [
  { description: 'Good.', name: 'apple', emoji: '🍎', price: 0.5 },
];

const FruitCard = ({ description, name, emoji, price }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{emoji}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {name}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Dolorum eveniet et. Et quos possimus porro quae eligendi error sint aliquam. Nobis nostrum non voluptas et. Praesentium voluptatibus et eum dolorum dolores ut.</Card.Text>
        <Card.Text>{price}$/1kg</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default App;
