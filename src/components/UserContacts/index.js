import { Container, UserHeader, Icons, BlockIcon, StatusIcon, GreenCircle, ChatIcon, MoreIcon, ContactsContainer } from './styles';
import Avatar from '../Avatar';
import NotificationAlert from '../NotificationAlert';
import Search from '../Search';
import Contacts from '../Contacts';
export default function UserContacts() {
    return (
        <>
            <Container>
                <UserHeader>
                    <Avatar />
                    <Icons>
                        <BlockIcon>
                            <StatusIcon />
                            <GreenCircle />
                        </BlockIcon>
                        <BlockIcon>
                            <ChatIcon />
                        </BlockIcon>
                        <BlockIcon>
                            <MoreIcon />
                        </BlockIcon>
                    </Icons>
                </UserHeader>
                <NotificationAlert />
                <Search />
                <ContactsContainer>
                    <Contacts />
                    <Contacts />
                    <Contacts />
                    <Contacts />
                    <Contacts />
                    <Contacts />
                
                </ContactsContainer>
            </Container>
        </>
    );
}