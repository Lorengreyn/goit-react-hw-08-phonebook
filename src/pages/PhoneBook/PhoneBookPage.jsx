import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import img from '../../img/open-book.jpg';
import css from './PhoneBook.module.scss';

function PhoneBookPage() {  

  return (
    <>
      <img className={css.img} src={img} alt="bg" />
      <div className={css.position}>
        <h2 className={css.title}>PhoneBook</h2>
        <ContactForm />
        <div className={css.margin}>
        <h3>Find contacts by name</h3>
          <Filter />
        </div>
      </div>
        <div className={css.sub_position}>
          <ContactList />
        </div>
      
    </>
  );
}

export default PhoneBookPage;
