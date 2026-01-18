import { useState, useEffect } from 'react';
import './App.css';
import { getDogodek, addDogodek } from './api/dogodki';
import type { Dogodek } from "./types";
import DogodekDetail from './components/DogodekDetail';
import DogodekForm from './components/DogodekForm';
import DogodekList from './components/DogodekList';




function App() {
  const [dogodki, setDogodki] = useState<Dogodek[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedDogodek, setSelectedDogodek] = useState<Dogodek | null>(null);

  useEffect(() => {
    getDogodek().then(setDogodki);
  }, [])

  const handleAddNew = () => {
    setShowForm(true);
    setSelectedDogodek(null);
  }

  const handleSave = async (data: Omit<Dogodek, "id">, id?:number) => {
    if(!id){
      const created = await addDogodek(data);
      setDogodki((prev) => [...prev, created]);
    }
    setShowForm(false);
  }

  let content;

  if(showForm){
    content = (
      <DogodekForm initial={null} onSave={handleSave} onCancel={() => setShowForm(false)} />
    );
  }
  else if(selectedDogodek){
    content = (
      <DogodekDetail dogodek={selectedDogodek} onBack={() => setSelectedDogodek(null)} />
    );
  }

  else{
    content = (
      <>
        <button onClick={handleAddNew}>Dodaj nov dogodek</button>
        <DogodekList dogodki={dogodki} onDogodekSelect={setSelectedDogodek} />
      </>
    );
  }
  return (
    <>
      <h1>Dogodki v bližini</h1>
      {content}
    </>
  )
}

export default App
