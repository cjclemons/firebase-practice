import React from "react";

const Nav = ({ register, login, logout, user, loading }) => {
  return (
    <nav>
      <div className="nav__container">
        {loading ? 'Loading, Please Wait...' :
        <div className="nav__options">
          
          {user.email ? (
            <button onClick={logout} className="btn logout__btn">
              {user.email[0].toUpperCase()}
            </button>
          ) : (
            <>
              <button onClick={login} className="btn login__btn">
                Login
              </button>
              <button onClick={register} className="btn register__btn">
                Register
              </button>
            </>
          )}
        </div>
        }
      </div>
    </nav>
  );
};
export default Nav;
