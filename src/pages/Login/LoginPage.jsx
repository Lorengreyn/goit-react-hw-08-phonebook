import FormLogin from "../../components/Form/FormLogin/FormLogin";
import css from './LoginPage.module.scss';
import img from '../../img/login.jpg'

function LoginPage() {
  return (
    <div className={css.container}>
      <img className={css.img} src={img} alt="bg" />
      <div className={css.form}>
        <h1 className={css.title}>Login</h1>
        <FormLogin title="sign up" />
      </div>
    </div>
  );
}

export default LoginPage;
