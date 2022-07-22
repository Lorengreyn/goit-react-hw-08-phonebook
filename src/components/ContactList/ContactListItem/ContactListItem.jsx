import PropTypes from "prop-types";
import { Notify } from "notiflix";
import css from "./ContactListItem.module.scss";
import {useDeleteContactMutation} from "../../../services/contactsApiService";


const ContactListItem = ({ name, number, id }) => {

  const [ deleteContact ] = useDeleteContactMutation();

  const onDeleteContact = e => {
    deleteContact(e.target.id);
     Notify.success("Contact is delete");
  };
  return (
    <div className={css.wrap}>
    <ul className={css.list}>
        <li className={css.wrap}>
          <h3 className={css.item}>Name:</h3>
          <p className={css.item}>{name}</p>
          <h3 className={css.item}>Number:</h3>
          <p className={css.item}>{number}</p>
        </li>
      </ul>
      <button
        
        type="button"
        className={css.button}
        onClick={onDeleteContact}
        id={id}
      >
        Delete
      </button>
    </div>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;