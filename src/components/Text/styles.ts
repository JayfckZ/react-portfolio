/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

import { Props } from '.'

export const Paragrafo = styled.p<Props>`
  color: ${(props) =>
    props.principal ? props.theme.corPrincipal : props.theme.corSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  line-height: 22px;
`
