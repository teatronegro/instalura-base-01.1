import React from 'react';
import { Logo } from '../../../theme/logo/Logo';
import { Text } from '../../Foundation/Text/index';
import { Button } from '../Button/index-button';
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
          <li key ={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
           )
      })}
      </MenuWrapper.CentralSide>
 <MenuWrapper.RightSide> {/* MenuWrapper.RightSide */}
        <Button type="button" ghost variant="secondary.main">
          Entrar
      </Button>
       <Button type="button" variant="primary.main">
          Cadastrar
       </Button>
 </MenuWrapper.RightSide>
    </MenuWrapper>
  )
    
    }