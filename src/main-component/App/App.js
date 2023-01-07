import React, { Fragment, useState } from 'react'
import AllRoute from '../router'
import './App.css'
import { UserProvider } from '../../context'
const App = () => {
  const [user, setUser] = useState(true)
  return (
    <Fragment>
      <UserProvider setUser={setUser} user={user}>
        <AllRoute />
      </UserProvider>
    </Fragment>
  )
}

export default App
