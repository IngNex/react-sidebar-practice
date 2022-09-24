import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const SSidebar = styled.div`
    width: ${v.sidebarWidth};
    background: ${({theme}) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};

    position: relative;
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
export const SLink = styled.div`
`
export const SLinkContainer = styled.div`
`
export const SLinkIcon = styled.div`
`
export const SLinkLabel = styled.div`
`
export const SLinkNotification = styled.div`
`