import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "./NavBar"
import { Provider } from 'react-redux'
import store from '../store/Store'

const RootLayout = () => {
  return (
    <>
    <Provider  store={store}>
     <h1> Navigation</h1>
    <NavBar />
    <main>
      <Outlet />
    </main>
    </Provider>
    </>
    
  )
}

export default RootLayout