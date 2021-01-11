import styled from 'styled-components';

export const Container = styled.div`
    height: 72px;
    background: #131c21;
    display: flex;
    cursor: pointer;
    &:hover {
        background: #2d3134;
    }
`;


export const ContactPhoto = styled.img`
    display: block;
    width: 49px;
    height: 49px;
    border-radius: 100%;
    margin: 10px 0 0 15px;
`;

export const ContactContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 15px;
    width: 100%;
    border-bottom: 1px solid #30383d;
`;

export const ContactData = styled.div`

    span.span-time {
        color: #f1f1f2a1;
        position: absolute;
        top: 16px;
        right: 10px;
    }
`;

export const ContactName = styled.span`
    color: #dcddd7;
    font-size: 20px;
`;

export const ContactMessage = styled.div`
    color: #9da1a3;
`;