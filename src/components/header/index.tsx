import { HeaderContainer, HeaderContent, NewTrasanctionButton } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt=""/>

                <NewTrasanctionButton>Nova Transação</NewTrasanctionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}