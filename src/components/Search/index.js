import { Container, SearchContent, ButtonContainer, SearchIcon, LeftArrowIcon, SearchInput } from './styles';

export default function Search() {
    return (
        <>
            <Container>
                <SearchContent> 
                    <ButtonContainer type="button">
                        <SearchIcon />
                        <LeftArrowIcon />
                    </ButtonContainer>
                    <SearchInput type="text" id-="serach" />
                    <label for="search">
                        Procurar ou começar uma nova conversa
                    </label>
                </SearchContent>
            </Container>
        </>
    )
}