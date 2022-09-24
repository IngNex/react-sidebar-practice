import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Slayout, SMain } from './styles'

const Layout = ({children}) => {
    return (
        <Slayout>
            <Sidebar/>
            <SMain>{children}</SMain>   
        </Slayout>
    )
}


export default Layout;
