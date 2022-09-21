import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Slayout, Smain } from './styles'

const Layout = ({children}) => {
    return (
        <Slayout>
            <Sidebar/>
            <Smain>{children}</Smain>   
        </Slayout>
    )
}


export default Layout;
