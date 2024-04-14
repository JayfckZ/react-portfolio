/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Paragrafo } from './styles'

export type Props = {
  children: string
  principal: boolean
  fontSize?: number
}

function Text(props: Props) {
  return (
    <Paragrafo principal={props.principal} fontSize={props.fontSize}>
      {props.children}
    </Paragrafo>
  )
}

export default Text
