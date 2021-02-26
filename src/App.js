import Badge from './components/badge';
import CheckBox from './components/checkbox';

function App() {
  return (
    <div className="App">
      <h1>Badge</h1>
      <Badge text="hello" variant="positive" size="sm" />
      <Badge text="hello" variant="negative" size="md" />
      <Badge text="hello" variant="pending" size="lg" />

      <h1>CheckBox</h1>
      <CheckBox label="enable" name="enabled" />
    </div>
  );
}

export default App;
