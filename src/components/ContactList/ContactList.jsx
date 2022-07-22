import { useSelector } from "react-redux";
import { getFilter } from 'redux/contacts/filterSlice';
import ContactListItem from "./ContactListItem/ContactListItem";
import { ContactListBox } from "./ContactList.styled";
import { useMemo } from 'react';
import { useGetContactsQuery } from '../../services/contactsApiService'

function ContactList() {
  const filter = useSelector(getFilter);
  const { data: contacts = [] } = useGetContactsQuery();

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });
  }, [contacts, filter]);

  const shownContacts = filter !== '' ? filteredContacts : contacts;
  return (
    <ContactListBox>
      {shownContacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
        />
      ))}
    </ContactListBox>
  );
}

export default ContactList;
