import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from './styles';
import logo from '../../assets/ingnex.png'
import {AiOutlineApartment, AiOutlineHome, AiOutlineSearch, AiOutlineSetting} from 'react-icons/ai'
import {MdLogout, MdOutlineAnalytics} from 'react-icons/md'
import {BsPeople} from 'react-icons/bs'

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
        {linksArray.map(({icon, label, notification, to}) => (
        <SLinkContainer key={label}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
            {
              !!notification && <SLinkNotification>{notification}</SLinkNotification>
            }
            
          </SLink>
        </SLinkContainer>
        ))}

        <SDivider/>
        {seclinksArray.map(({icon, label}) => (
        <SLinkContainer key={label}>
          <SLink>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>            
          </SLink>
        </SLinkContainer>
        ))}

        <SDivider/>
        <STheme>
          <SThemeLabel>Dark Mode</SThemeLabel>
          <SThemeToggler>
            <SToggleThumb/>
          </SThemeToggler>
        </STheme>

    </SSidebar>
  )
}

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome/>,
    to: "/",
    notification: 0
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics/>,
    to: "/statistics",
    notification: 3
  },
  {
    label: "Customers",
    icon: <BsPeople/>,
    to: "/customers",
    notification: 0
  },{
    label: "Diagrams",
    icon: <AiOutlineApartment/>,
    to: "/diagrams",
    notification: 1
  }
]

const seclinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting/>
  },{
    label: "Logout",
    icon: <MdLogout/>
  }
]
export default Sidebar;

