import React from 'react';
import { Logo } from '../../../theme/logo/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button/index';
import { MenuWrapper } from './styles/MenuWrapper';


const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas Frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/Sobre',
  }
]

export default function Menu() {
    return (
    <MenuWrapper>
    <MenuWrapper.LeftSide>
      <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map(function (link) {
          return (
            <li key={link.url}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.texto}
              </Text>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
      </Button>
      <Button variant="primary.main">
          Cadastrar
       </Button>
 </MenuWrapper.RightSide>
    </MenuWrapper>
  )
    
    }