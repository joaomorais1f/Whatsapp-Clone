import { Container, ContactPhoto, ContactContent, ContactData, ContactName, ContactMessage } from './styles';

import Pedro from '../../assets/images/pedro.jpg';
export default function Contacts() {
    return (
        <>
            <Container>
                <ContactPhoto src={Pedro} alt="foto_de_perfil" />
                <ContactContent>
                    <ContactData>
                        <ContactName>
                            Maehara(前原)
                        </ContactName>
                        <span class="span-time"> 21:37 </span>
                        <ContactMessage>
                            kkkkkk
                        </ContactMessage>
                    </ContactData>
                </ContactContent>
            </Container>
        </>
    )
}