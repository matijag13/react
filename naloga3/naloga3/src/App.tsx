import { useParams, Link } from 'react-router-dom';
import Menu from "./components/Menu"
import Telo from "./components/Telo"
import Noga from "./components/Noga"
import './App.css'
import { ekipe } from './podatki';

function App() {
  const { id } = useParams(); // Get the ID from the URL
  
  // Find the team with the matching ID
  const izbranaEkipa = ekipe.find(e => e.id === Number(id));

  if (!izbranaEkipa) {
    return <div>Ekipa ni najdena! <Link to="/">Nazaj</Link></div>;
  }

  return (
    <>
      {/* 1. Pass team name to Menu */}
      <Menu imeEkipe={izbranaEkipa.ime} />
      
      {/* 2. Pass the list of players data to Telo */}
      <Telo ekipa={izbranaEkipa.igralci}/>
      
      <Noga/>
      <br/>
      <Link to="/">Nazaj na seznam</Link>
    </>
  )
}

export default App