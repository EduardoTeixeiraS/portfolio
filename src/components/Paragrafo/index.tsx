import { P } from './styles'

export type Props = {
  children: string
  // Limitando os tipos que podem ser recebidos.
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
