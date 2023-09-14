import React, { useState } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

export const Login = () => {

    const [userData, setUserData] = useState({})

    const required = value => {
        if (!value) {
            return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
            );
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setUserData({...userData, message: '', loading: true});

        Form.validateAll()
    }

  return (
    <div>Login</div>
  )
}
