
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App container mx-auto my-2 bg-red-200 border-2 border-black">
      
      <UserProfile name="Keiffer" email="keiffer@gmail.com" />
      
      <hr className=' my-2'></hr>
      <UserProfile name="Kathryn" email="Kathryn@gmail.com" />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
