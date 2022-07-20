import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/user/userOperations";
import css from './FormSingUp.module.scss';

function FormRegister({ title }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    
    <form className={css.form}>
      <ul className={css.form_list}>
        <li className={css.form_item}>
        <h3 className={css.form_title}>Login</h3>
        <input
        className={css.form_input}
        type="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="name"
        autoComplete="off"
        />
      </li>
      <li className={css.form_item}>
        <h3 className={css.form_title}>Email</h3>
        <input
          className={css.form_input}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
        autoComplete="off"
        />
      </li>
      <li className={css.form_item}>
        <h3 className={css.form_title}>Password</h3>
        <input
          className={css.form_input}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
        autoComplete="off"
        />
      </li></ul>
      
      
      <button className={css.form_button} type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
FormRegister.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FormRegister;
