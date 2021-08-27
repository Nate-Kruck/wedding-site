import WCountdown from './components/Countdown.js'
import Header from './components/Header.js'
// import './App.css'

function App() {
  return (
    <div className="App">
      <div className="Box-header">
        <header className="App-header">
          <Header />
        </header>
      </div>
      <div className="Countdown">
        <WCountdown />
      </div>
    </div>
  );
}

export default App;
