import ConnectionPhone from '../../assets/images/intro-connection-dark.jpg';

import { Container, ConnectionContainer, PhoneConnection, ConnectionPhoneContainer, ConnectionFooter, ComputerIcon } from './styles';

export default function DarkConnection () {
    return (
        <>
        <Container>
            <ConnectionContainer>
                <PhoneConnection src={ConnectionPhone} alt="phone_connection" />
                <ConnectionPhoneContainer>
                    <h1> Mantenha seu celular conectado </h1>
                    <div>
                        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
                    </div>
                    <div className="border" />
                    <ConnectionFooter>
                        <ComputerIcon />
                        <span> O WhatsApp está disponível para Windows.</span>
                        <a href="/"> Obtenha-o aqui.</a>
                    </ConnectionFooter>
                </ConnectionPhoneContainer>
            </ConnectionContainer>
        </Container>
        </>
    )
}