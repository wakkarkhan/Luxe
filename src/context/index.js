import { createContext, useEffect } from 'react'

const UserContext = createContext()

export function UserProvider({ children, user, setUser }) {
  useEffect(() => {
    let id = localStorage.getItem('id')

    if (id) {
      setUser(true)
    } else {
      setUser(false)
    }
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
