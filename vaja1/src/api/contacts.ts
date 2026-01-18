import type { Contact } from "../types";

const BASE_URL = "http://localhost:3000/contacts";

export async function getContacts(): Promise<Contact[]> {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function addContact(
  contact: Omit<Contact, "id">
): Promise<Contact> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return res.json();
}

export async function updateContact(contact: Contact): Promise<Contact> {
  const res = await fetch(`${BASE_URL}/${contact.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return res.json();
}