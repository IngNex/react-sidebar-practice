import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar } from './styles';
import logo from '../../assets/ingnex.png'
import {AiOutlineApartment, AiOutlineSearch} from 'react-icons/ai'
import {MdOutLineAnalytics} from 'react-icons/md'
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
          <SLink>
            <SLinkIcon></SLinkIcon>
            <SLinkLabel>Home</SLinkLabel>
            <SLinkNotification>5</SLinkNotification>
          </SLink>
        </SLinkContainer>
        ))}
    </SSidebar>
  )
}

const linksArray = [
  {
    label: "Home",
    icons: <AiOutlineHome/>,
    to: "/",
    notification: 5
  },
  {
    label: "Statistics",
    icons: <MdOutLineAnalytics/>,
    to: "/statistics",
    notification: 3
  },
  {
    label: "Customers",
    icons: <BsPeople/>,
    to: "/customers",
    notification: 2
  },{
    label: "Diagrams",
    icons: <AiOutlineApartment/>,
    to: "/diagrams",
    notification: 1
  }
]
export default Sidebar;

