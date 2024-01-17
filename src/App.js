import logo from './logo.svg';
import './App.css';
import User from './User';
import Home from './components/Home'
import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <div className="App">
      <HomeContainer/>
      {/* <Home /> */}
      {/* <h1>App Component</h1>
      <User data={{name:"Anil Sidhu",age:"26"}}></User> */}
    </div>
  );
}

export default App;
