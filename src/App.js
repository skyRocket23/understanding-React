import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
    <Navbar title="TextUtils2"/>
    <div className="container">
      <TextForm heading="Text-Analyser"/>
    </div>
      
    </>
  );
}

export default App;
