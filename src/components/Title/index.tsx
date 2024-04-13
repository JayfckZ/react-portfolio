/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Title as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

function Title(props: Props) {
  return <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
}

export default Title
