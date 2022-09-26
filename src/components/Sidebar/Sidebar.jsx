import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar } from './styles';
import logo from '../../assets/ingnex.png'
import {AiOutlineApartment, AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineAnalytics} from 'react-icons/md'
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
export default Sidebar;

