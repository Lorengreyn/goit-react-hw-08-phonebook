import FormLogin from "../../components/Form/FormLogin/FormLogin";
import css from './LoginPage.module.scss';
import img from '../../img/_27_background-wallpaper-leather_128913354.jpg'

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
