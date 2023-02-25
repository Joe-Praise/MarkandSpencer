import React from 'react'
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import SignInForm from '../SignIn/SignInForm';

const Signin = () => {
  return (
    <div>
      <Navigation/>
      <SignInForm />
      <Footer/>
    </div>
  )
}

export default Signin