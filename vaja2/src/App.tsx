import { useState, useEffect } from 'react'
import ReceptiList from "./components/ReceptiList.tsx";
import ReceptForm from "./components/ReceptForm.tsx";
import './App.css'
import type {Recept} from "./types.ts"
import { getRecepti, addRecept } from "./api/recepti.ts";

function App() {
    const [recepti, setRecepti] = useState<Recept[]>([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        getRecepti().then(setRecepti);
    }, []);

    const handleAddNew = () => {
        setShowForm(true);
    };

    const handleSave = async (data: Omit<Recept, "id">, id?: number) => {
        if(!id){
            const created = await addRecept(data);
            setRecepti((prev) => [...prev, created]);
        }
        setShowForm(false);
    };

  return (
      <div className="container">
          <h1>Recepti</h1>

          {!showForm && (
              <>
                  <button onClick={handleAddNew}>Dodaj recept</button>
                  <ReceptiList recepti={recepti} />

              </>
          )}

          {showForm && (
              <ReceptForm
                  initial={null}
                  onSave={handleSave}
                  onCancel={() => setShowForm(false)}
              />
          )}
      </div>
  );
}

export default App
