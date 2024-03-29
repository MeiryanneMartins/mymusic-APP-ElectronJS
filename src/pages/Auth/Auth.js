import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import {AuthOptions, RegisterForm, LoginForm} from "../../components/Auth";
import { logoNameEyetech } from "../../assets";

import "./Auth.scss";

export function Auth() {
  const [typeForm, setTypeForm] = useState(null);

  const openLogin = () => setTypeForm("login");
  const openRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => { 
    if (typeForm === "login") {
      return <LoginForm openLogin={openLogin} goBack={goBack} />;
    }

    if (typeForm === "register") {
      return <RegisterForm openRegister={openRegister} goBack={goBack}/>;
    }

    return <AuthOptions openLogin={openLogin} openRegister={openRegister}/>;
  };

  return (
    <div className="auth">
      <div className="auth__content">
        <Image
          src={logoNameEyetech}
          alt="mymusic"
          className="auth__content-logo"
        />  
        {renderForm()}
      </div>
    </div>
  );
}