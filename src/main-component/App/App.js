import React, { Fragment, useState } from 'react'
import AllRoute from '../router'
import './App.css'
import { UserProvider } from '../../context'
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jXX9cc3dRR2BbWEM="
)
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
