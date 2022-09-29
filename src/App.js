
import './App.css';
import Header from './components/Header/Header';
import Question from './components/question/Question';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
