import React from 'react'
import Title from '../Title'
import Text from '../Text'
import { Card, LinkBotao } from './styles'

function Projeto() {
  return (
    <Card>
      <Title>Lista de tarefas</Title>
      <Text principal={false}>Lista de tarefas com VueJS</Text>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
