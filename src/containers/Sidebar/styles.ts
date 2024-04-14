import styled from 'styled-components'
import { Paragrafo } from '../../components/Text/styles'

export const Descricao = styled(Paragrafo)`
  margin: 24px 0 40px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.corFundo};
  color: ${(props) => props.theme.corFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  padding: 8px;
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
