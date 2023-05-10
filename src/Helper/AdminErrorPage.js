import React from 'react'
import { Link } from 'react-router-dom'

const AdminErrorPage = () => {
  return (
    <>
        <div className='error_msg'>
            <h1>An Error Occured</h1>
            <p>This page doesn't exist</p>
            <p>Confirm your path or go to <Link to="/secureadmin/dashboard">the home page</Link></p>
        </div>
    </>
  )
}

export default AdminErrorPage