import { useState, useEffect } from 'react'
import KnjigeList from './components/KnjigeList'
import KnjigaDetails from './components/KnjigaDetails'
import type { Knjiga } from './types'
import './App.css'
import { getKnjige, addKnjiga } from './api/knjige'
import KnjigaForm from './components/KnjigeForm'

function App() {
  const [knjige, setKnjige] = useState<Knjiga[]>([]);
  const [showForm, setShowForm] = useState(false);
const [selectedKnjiga, setSelectedKnjiga] = useState<Knjiga | null>(null);
  useEffect(() => {
    getKnjige().then(setKnjige);
  }, []);


  const handleAddNew = () => {
        setShowForm(true);
        setSelectedKnjiga(null);
  };

  const handleSave = async (data: Omit<Knjiga, "id">, id?:number) => {
    if(!id){
      const created = await addKnjiga(data);
      setKnjige((prev) => [...prev, created]);
    }
    setShowForm(false);
  }
 let content;

  if (showForm) {
      content = (
          <KnjigaForm
              initial={null}
              onSave={handleSave}
              onCancel={() => setShowForm(false)}
          />
      );
  } else if (selectedKnjiga) {
      content = (
          <KnjigaDetails
              knjiga={selectedKnjiga}
              onBack={() => setSelectedKnjiga(null)}
          />
      );
  } else {
      content = (
          <>
              <button onClick={handleAddNew}>Dodaj knjigo</button>
              <KnjigeList 
                  knjige={knjige} 
                  onKnjigaSelect={setSelectedKnjiga} 
              />
          </>
      );
  }

   return (
    <div className="container">
          <h1>Moja knjižnica</h1>
          {content}
    </div>
  );
}

export default App
