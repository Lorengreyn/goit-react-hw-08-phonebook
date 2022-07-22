import FormRegister from "../../components/Form/FormSingUp/FormSingUp";
import css from './SingUp.module.scss';
import img from '../../img/login.jpg'

function SingUpPage() {
  return (
    <div className={css.container}>
      <img className={css.img} src={img} alt="bg" />
      <div className={css.form}>
        <h1 className={css.title}>SingUp</h1>
        <FormRegister title="signup" />
      </div>
    </div>
  );
}

export default SingUpPage;
