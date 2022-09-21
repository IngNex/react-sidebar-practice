import React from 'react'
import { SLogo, SSearch, SSidebar } from './styles';
import logo from '../../assets/ingnex.png'
const Sidebar = () => {
  return (
    <SSidebar>
        <SLogo>
            <img src={logo} alt="" />
        </SLogo>
        <SSearch>
            <input type="text" />
        </SSearch>
    </SSidebar>
  )
}

export default Sidebar;

