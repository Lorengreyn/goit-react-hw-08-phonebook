import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/user/userOperations";
import { getIsLoggedIn } from "../../redux/user/userSelectors";
import { SFlexContainer } from "../Containers/Containers.styled";
import css from './Header.module.scss'
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)` 
color: white;

&.active {
  color: orange;
}

`;

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className={css.header}>
      <SFlexContainer size={20}>
        <NavLink to="/login" className={css.logo}>Phonebook</NavLink>
        <div className={css.nav}>
          <ul className={css.nav_ul}>
            {isLoggedIn ? (
              <>
                <li className={css.nav_item}>
                  <StyledLink to="/contacts">Phonebook</StyledLink>
                </li>
                <li className={css.nav_item}>
                  <StyledLink to="/login" onClick={() => dispatch(logOut())}>
                    Logout
                  </StyledLink>
                </li>
              </>
            ) : (
              <>
                <li className={css.nav_item}>
                  <StyledLink to="/login">Login</StyledLink>
                </li>
                <li className={css.nav_item}>
                  <StyledLink to="/register">SingUp</StyledLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </SFlexContainer>
    </div>
  );
}
