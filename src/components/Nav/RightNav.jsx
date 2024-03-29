import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Signout from '../pages/Signout';
import ButtonDashboard from './ButtonDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../auth/AuthContext';
// import SearchBar from './SearchBar';

// import { ProtectedRoute } from "./components/auth/ProtectedRoute";
// import Dashboard from "./components/pages/Dashboard";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 1068px) {
    flex-flow: column nowrap;
    background: linear-gradient(
      50deg,
      rgba(131, 58, 180, 1) 0%,
      rgb(230, 53, 53) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    z-index: 1;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  const AuthContextValue = useContext(AuthContext);
  return (
    <Ul open={open}>
      {/* <li>
        <SearchBar />
      </li> */}
      <li>
        <NavLink className="navLi" exact to="/">
          {' '}
          Home{' '}
        </NavLink>
      </li>
      <li>
        <NavLink className="navLi" to="/2021">
          {' '}
          2021{' '}
        </NavLink>
      </li>
      <li>
        <NavLink className="navLi" to="/2022">
          {' '}
          2022{' '}
        </NavLink>
      </li>
      <li>
        {AuthContextValue.isSignedIn && (
          <NavLink className="navLi" to="/profile">
            Profile
          </NavLink>
        )}
      </li>

      <li>
        {AuthContextValue.isAdmin && AuthContextValue.isSignedIn && (
          <NavLink className="navLi" to="/dashboard">
            <ButtonDashboard />
          </NavLink>
        )}
      </li>
      <li>
        {AuthContextValue.signout && (
          <NavLink className="navLi" to="/signup">
            {' '}
            Inscription{' '}
          </NavLink>
        )}
      </li>
      <li>
        {AuthContextValue.signout && (
          <NavLink className="navLi" to="/login">
            {' '}
            <FontAwesomeIcon icon={faUser} />{' '}
          </NavLink>
        )}
      </li>
      <li>
        {AuthContextValue.isSignedIn && (
          <NavLink to="/">
            <Signout />
          </NavLink>
        )}
      </li>
    </Ul>
  );
};

export default RightNav;
