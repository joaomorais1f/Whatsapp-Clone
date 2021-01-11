import {
    Container,
    Wrapper,
    Notification,
    NotificationIcon,
    NotificationContainer,
    Title,
    DescriptionContainer,
    Description,
    LeftArrow 
} from './styles';


export default function NotificationAlert() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Notification>
                        <NotificationIcon />
                    </Notification>
                <NotificationContainer>
                    <Title> Receba notificações de novas mensagens </Title>
                    <DescriptionContainer>
                        <Description> Ativar notificações na área de trabalho </Description>
                        <LeftArrow />
                    </DescriptionContainer>
                </NotificationContainer>
                </Wrapper>
            </Container>
        </>
    )
}