import logo from './logo.svg';
import './App.css';
import generateKey from './components/randomGenerator';
function App() {
  const test = 'halllloa'
  let key = generateKey(test)
  console.log(key)
  return (
    <div>

    </div>
  );
}

export default App;
