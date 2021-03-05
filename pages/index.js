
import styled from 'styled-components'

//const Title = styled.h1`
//  font-size: 200px;
//  color: ${({ theme }) => theme.colors.primary};
//`

import Menu from '../src/components/commons/Menu/index-Menu'
import Footer from '../src/components/commons/Footer'


function Title(props) {
  return <h1>props.children</h1>
}

export default function Home() {

  return <div><Title>Qualquer valor</Title>My Page</div>

  return (
    <div style={{
     flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
    <Menu />
    <Footer />
    </div>
     )

}
