import { useState } from "react";
import css from './ContactForm.module.scss'
import { useCreateContactMutation, useGetContactsQuery } from "../../services/contactsApiService";


export default function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useCreateContactMutation();

  const handleChangeForm = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'number':
        return setNumber(e.target.value);
      default:
        throw new Error();
    }
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormSubmit = e => {
      e.preventDefault();
      const contact = {
        name,
        number,
      };
      handlerSubmitUserForm(contact);
      resetName();
    };
  
    const handlerSubmitUserForm = contact => {
      contacts.some(
        contactItem =>
          contactItem.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
        ? alert(`${name} is already in contacts`)
        : addContact(contact);
    };

    const resetName = () => {
      setName('');
      setNumber('');
    };

  
    return (<>
      <div>
        <form className={css.form} onSubmit={handleFormSubmit}>
          <h2 className={css.title}>Name</h2>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChangeForm}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer..."
            required
          />
      
          <h2>Number</h2>
          <input
            className={css.input}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={handleChangeForm}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
      
          <button className={css.button} type="submit">Add contact</button>
        </form></div></>
    );
  };

