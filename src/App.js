import './App.css';
import Header from './components/Header';
import TodoGrid from './components/TodoGrid';

function App() {
  return (
    <>
    <Header/>
    <div className='mb-3'>

    <TodoGrid/>
    </div>
    </>
  );
}

export default App;
