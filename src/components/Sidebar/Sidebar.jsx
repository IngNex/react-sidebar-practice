import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar } from './styles';
import logo from '../../assets/ingnex.png'
import {AiOutlineSearch} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <SSidebar>
        <SLogo>
            <img src={logo} alt="" />
        </SLogo>
        <SSearch>
          <SSearchIcon>
            <AiOutlineSearch></AiOutlineSearch>
          </SSearchIcon>
          <input type="text" placeholder='Search'/>
        </SSearch>
        <SDivider/>
        <SLinkContainer>
          <SLink>
            <SLinkIcon></SLinkIcon>
            <SLinkLabel>Home</SLinkLabel>
            <SLinkNotification>5</SLinkNotification>
          </SLink>
        </SLinkContainer>
    </SSidebar>
  )
}

const linksArray = [
  {
    label: "Home",
    icons: <AiOutlineHome/>,
    to: "/",
    notification: 0
  },
  {
    label: "Home",
    icons: <AiOutlineHome/>,
    to: "/",
    notification: 0
  },
  {
    label: "Home",
    icons: <AiOutlineHome/>,
    to: "/",
    notification: 0
  },
]
export default Sidebar;

