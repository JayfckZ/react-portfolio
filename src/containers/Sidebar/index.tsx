import React from 'react'
import Title from '../../components/Title'
import Text from '../../components/Text'
import Avatar from '../../components/Avatar'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

function Sidebar({ trocaTema }: Props) {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>João Marcelo</Title>
        <Text principal={false} fontSize={16}>
          JayfckZ
        </Text>
        <Descricao principal fontSize={12}>
          Desenvolvedor Fullstack Python
        </Descricao>
        <BotaoTema type="button" onClick={trocaTema}>
          Trocar tema
        </BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
