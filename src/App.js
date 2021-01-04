import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Message name="Jesus" yearOfBirth={0} />
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
export default App;
