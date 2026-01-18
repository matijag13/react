import type { Contact } from "../types";

interface Props {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
}

export default function ContactsList({ contacts, onEdit }: Props) {
  if (contacts.length === 0) return <p>No contacts yet.</p>;

  return (
    <ul>
      {contacts.map((c) => (
        <li key={c.id}>
          {c.firstName} {c.lastName} - {c.phone}{" "}
          <button onClick={() => onEdit(c)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}