import './App.css';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>News hub</h1>
      </header>
      <article>
        <NewsList />
      </article>
    </div>
  );
}

export default App;
