import { useEffect, useState } from "react";
import { addContact, getContacts, updateContact } from "./api/contacts";
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import type { Contact } from "./types";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Contact | null>(null);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  const handleAddNew = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleSave = async (data: Omit<Contact, "id">, id?: number) => {
    if (id) {
      const updated = await updateContact({ id, ...data });
      setContacts((prev) => prev.map((c) => (c.id === id ? updated : c)));
    } else {
      const created = await addContact(data);
      setContacts((prev) => [...prev, created]);
    }
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>Contacts</h1>

      {!showForm && (
        <>
          <button onClick={handleAddNew}>Add contact</button>
          <ContactsList
            contacts={contacts}
            onEdit={(c) => {
              setEditing(c);
              setShowForm(true);
            }}
          />
        </>
      )}

      {showForm && (
        <ContactForm
          initial={editing}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;