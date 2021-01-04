import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroupItem, ListGroup, Card, CardColumns } from 'react-bootstrap';
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
        <FruitCards fruits={fruits} />
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
  { description: 'So so.', name: 'orange', emoji: '🍊', price: 0.2 },
  { description: 'Okay.', name: 'grape', emoji: '🍇', price: 1.2 },
  { description: 'Excellent', name: 'pear', emoji: '🍐', price: 1.5 },
  { description: 'Good.', name: 'strawberry', emoji: '🍓', price: 0.5 },
  { description: 'So so.', name: 'mango', emoji: '🥭', price: 0.2 },
  { description: 'Okay.', name: 'kiwi', emoji: '🥝', price: 1.2 },
  { description: 'Excellent', name: 'watermelon', emoji: '🍉', price: 1.5 },
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

const FruitCards = ({ fruits }) => {
  return (
    <CardColumns>
      {fruits.map((fruit) => (
        <FruitCard
          description={fruit.discription}
          name={fruit.name}
          emoji={fruit.emoji}
          price={fruit.price}
        />
      ))}
    </CardColumns>
  );
};

export default App;
