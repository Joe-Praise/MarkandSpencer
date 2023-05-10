import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <div className='error_msg'>
            <h1>An Error Occured</h1>
            <p>This page doesn't exist</p>
            <p>Go to <Link to="/">the Home page</Link></p>
        </div>
    </>
  )
}

export default ErrorPage