import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroupItem, ListGroup } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Message name="Jesus" yearOfBirth={0} />
        <List list={allItems} />
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
export default App;
