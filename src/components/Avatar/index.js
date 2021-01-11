import Perfil from '../../assets/images/joao.jpg';
import { BlockPhoto, Photo } from './styles';

export default function Avatar() {
    return (
        <>
        <BlockPhoto>
            <Photo src={Perfil} alt="foto_de_perfil" />
        </BlockPhoto>
        </>
    );
}