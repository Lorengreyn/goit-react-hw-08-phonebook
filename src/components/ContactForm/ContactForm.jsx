import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix";
import css from './ContactForm.module.scss'
import { createContacts } from "../../redux/contacts/contactsOperations";


function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.items.contacts);
  // const contactStatus = useSelector(state => state.phonebook.items.status);
  const [form, setForm] = useState({
    name: "",
    number: "",
  });

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const { name, number } = form;

  const isUniqueContact = () => {
    const isExistContact = contacts.find(contact => contact.name === name);
    if (isExistContact) {
      Notify.failure("Contact is already exist");
    }
    return !isExistContact;
  };
  const validateForm = () => {
    if (!name || !number) {
      Notify.failure("Some field is empty");
      return false;
    }
    return isUniqueContact(name);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const isValidateForm = validateForm();
    if (!isValidateForm) return;
    dispatch(
      createContacts({ id: nanoid(10), name, number }),
      Notify.success("Contact is add phonebook"),
    );
    const resetForm = () => setForm({ name: "", number: "" });
    resetForm();
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
}
export default ContactForm;
