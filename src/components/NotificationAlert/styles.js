import styled from 'styled-components';
import { NotificationsOff } from '@styled-icons/material/NotificationsOff';
import { ArrowIosForward } from '@styled-icons/evaicons-solid/ArrowIosForward';

export const Container = styled.div`
    background-color: #085373;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
`;

export const Notification = styled.div`
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8eb2be;
    border-radius: 25px;
    margin: 0 15px;
`;

export const NotificationIcon = styled(NotificationsOff)`
    width: 50%;
    color: #085373;
`;

export const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    justify-content: center;
`;

export const Title = styled.h3`
    font-size: 16px;
    line-height: 21px;
    color: #dae1e5;
    font-family: "Segoe UI";
    font-weight: 500;
`;

export const DescriptionContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #abc2cb;
`;

export const Description = styled.span`
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
`;

export const LeftArrow = styled(ArrowIosForward)`
    width: 16px;
    color: #aec4cd;
    transform: translateY(2px);
`; 