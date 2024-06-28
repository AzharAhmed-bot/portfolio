import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import About from './components/About/About';
const App = () => {
  return (
    <div id="app" className="App">
        <Header/>
        <Body/>
        <About/>
    </div>
  );
}

export default App;