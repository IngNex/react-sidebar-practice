import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const SSidebar = styled.div`
    width: ${v.sidebarWidth};
    background: ${({theme}) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};

    position: relative;
`
export const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({isOpen}) => isOpen ? '-16px' : '-40px'};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({theme}) => theme.bg};
`

export const SLogo = styled.div`
    width: 60px;
    
    img{
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;
    margin-bottom: ${v.lgSpacing};

`
export const SSearch = styled.div`
    background: ${({theme}) => theme.bgAlpha};
    border: 1px solid ${({theme})=> theme.gb3};
    border-radius: ${v.borderRadius};
    input{
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }

    display: flex;
`

export const SSearchIcon = styled.div`
    ${btnReset};
    padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
    display: flex;
    cursor: pointer;

    svg{
        font: 20;
    }
`

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({theme}) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`
export const SLinkContainer = styled.div`
    background: transparent;
    border-radius: ${v.borderRadius};

    :hover{
        box-shadow: inset 0 0 0 1px ${({theme})=> theme.bg3};
    }
`

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing}-2px) 0;
`

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg{
        font-size: 20px;
    }
`
export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};

`
export const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing}/2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background: ${({theme}) => theme.primary};
    color: white;

    margin-right: ${v.mdSpacing};
`
/*============= THEME ============*/
export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px; 
`
export const SThemeLabel = styled.span`
    display: block;
    flex: 1;   
`

export const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({theme, isActive}) => (!isActive ? theme.bg3 : theme.primary)};

    position: relative;
`
export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: .2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({theme}) => theme.bg};
`