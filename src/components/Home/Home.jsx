import { Link } from "react-router-dom";
import img from '../../img/home.jpg';
import css from './Home.module.scss';

const Home = () => {
    return (
        <><div className={css.container}>
        <img className={css.img} src={img} alt="bg" />
         <div className={css.form}>
         <h2 className={css.title}>Hello! Welcome to the phone book.</h2>
          <p className={css.text}>Before you get started, please sing up or log in.</p>
          <ul className={css.form_list}>
            <button type="button" className={css.button}><Link className={css.link} to="/login">Login</Link></button>
            <button type="button" className={css.button}><Link className={css.link} to="/singup">SingUp</Link></button>
          </ul>
        </div>
        
      </div></>
    )
}

export default Home;