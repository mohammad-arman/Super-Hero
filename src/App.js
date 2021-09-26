import './App.css';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Heading from './components/Heading/Heading';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Heading></Heading>
      <Doctors></Doctors>
      <Footer></Footer>
    </div>
  );
}

export default App;
