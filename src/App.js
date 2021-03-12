import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
