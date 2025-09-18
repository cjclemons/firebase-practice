import React from "react";

const Nav = (register, login, logout) => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__options">
          <div className="nav__login"></div>
          <button onClick={register} className="btn login__btn">
            Login
          </button>
          <button onClick={login} className="btn register__btn">
            Register
          </button>
          <button onClick={logout} className="btn logout__btn"></button>
          <div className="nav__register"></div>
          <div className="nav__logout"></div>
        </div>
      </div>
    </nav>
  );
};



export default Nav;
