import styled, { css } from 'styled-components';
import { DonutLarge } from '@styled-icons/material/DonutLarge';
import { ChatLeftTextFill } from '@styled-icons/bootstrap/ChatLeftTextFill';
import { MoreVertical } from '@styled-icons/evaicons-solid/MoreVertical';

export const Container = styled.div`
    height: 100vh;
    width: 500px;
    display: flex;
    flex-direction: column;
`;

export const UserHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #2a2f32;
`;

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    margin-right: 10px;
`;

export const BlockIcon = styled.div`
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    position: relative;
`;

const Icon = css`
    width: 25px;
    height: 25px;
    color: var(--color-icon);
`;

export const StatusIcon = styled(DonutLarge)`
    ${Icon};
    transform: rotate(240deg);
`;

export const GreenCircle = styled.div`
    height: 6px;
    width: 6px;
    background-color: #009588;
    border-radius: 100%;
    position: absolute;
    top: 14px;
    right: 10px;
`;

export const ChatIcon = styled(ChatLeftTextFill)`
    width: 18px;
    height: 18px;
    color: var(--color-icon);
`;

export const MoreIcon = styled(MoreVertical)`
    ${Icon};
`;

export const ContactsContainer = styled.div`

`;