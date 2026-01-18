import { useState } from "react";
import type { Contact } from "../types";

interface Props {
  initial?: Contact | null;
  onSave: (data: Omit<Contact, "id">, id?: number) => void;
  onCancel: () => void;
}

export default function ContactForm({ initial, onSave, onCancel }: Props) {
  const [firstName, setFirstName] = useState(initial?.firstName ?? "");
  const [lastName, setLastName] = useState(initial?.lastName ?? "");
  const [phone, setPhone] = useState(initial?.phone ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ firstName, lastName, phone }, initial?.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First name</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last name</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>Phone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}