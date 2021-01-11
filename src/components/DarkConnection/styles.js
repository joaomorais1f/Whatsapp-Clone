import styled from 'styled-components';
import {Computer} from '@styled-icons/material/Computer';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #262d31;
    width: 80%;
    margin: 0 auto;
    border-left: 1px solid rgba(241,241,242, 0.11);

`;

export const ConnectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 100%;
    max-width: 90%;
    text-align: center;
    margin-top: -30px;
`;

export const PhoneConnection = styled.img`
    height: 250px;
    width: 250px;
    transform: scale(1);
    border-radius: 100%;
`;

export const ConnectionPhoneContainer = styled.div`
    margin-top: 20px;
    h1 {
        color: rgba(241,241,242,0.88);
        font-weight: 300;
    }

    div {
        margin-top: 24px;
        color: var(--intro-secondary);
        font-size: 14px;
        line-height: 20px;
    }

    div.border {
        height: 1px;
        background: rgba(241,241,241,0.11);
        margin: 34px 0;
    }

    @media screen and (max-height: 740px) {
        h1 {
            font-size: 32px;
        }

        div {
            margin-top: 18px;
        }
    }   
`;

export const ConnectionFooter = styled.footer`
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: var(--intro-secondary);
    width: 402px;
    font-size: 13px;
    justify-content: center;
    span {
        margin-left: 5px;
    }

    a {
        color: #00af9c;
        text-decoration: none;
    }
`;

export const ComputerIcon = styled(Computer)`
    height: 20px;
`;