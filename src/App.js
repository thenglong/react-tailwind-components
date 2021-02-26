import Badge from './components/badge';

function App() {
  return (
    <div className="App">
      <h1>Badge</h1>
      <Badge text="hello" variant="positive" size="sm" />
      <Badge text="hello" variant="negative" size="md" />
      <Badge text="hello" variant="pending" size="lg" />
    </div>
  );
}

export default App;
