import React from 'react'
import { Outlet } from "react-router-dom";
import SideMenu from '../SideMenu'

function Layout() {
  return (
    <>
      <SideMenu />
      <section className='chatgpt'>
        <Outlet />
      </section>
    </>
  )
}

export default Layout