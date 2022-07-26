import { useDispatch, useSelector } from "react-redux";
import css from "../ContactForm/ContactForm.module.scss";
import { filterContact } from "../../redux/contacts/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  return (
      <input
      className={css.input}
      type="text"
      name="filter"
      value={filterValue}
      onChange={e => dispatch(filterContact(e.target.value))}
      placeholder="Enter name for Search"
      />
  );
}

export default Filter;
