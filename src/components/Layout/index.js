import { Container, Wrapper } from './styles';  
import UserContacts from '../UserContacts';
import DarkConnection from '../DarkConnection';

export default function Layout() {
    return (
        <>
        <Container>
            <Wrapper>
                <UserContacts />
                <DarkConnection />
                {/* <Messages /> */}
            </Wrapper>
        </Container>
        </>
    );
}
