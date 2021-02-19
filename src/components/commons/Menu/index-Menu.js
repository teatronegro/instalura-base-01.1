import React from 'react';
import { Logo } from '../../../theme/logo/Logo';
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
      {links.map((links) => {
        return (
          <li>
            <a href={links.url}>
              {links.texto}
            </a>
          </li>

        )
      })}
      </MenuWrapper.CentralSide>
    <MenuWrapper.RightSide>
      <button>
        ENTRAR
        </button>
      <button>
        CADASTRO
      </button>
      </MenuWrapper.RightSide>
    </MenuWrapper> 
    )
    }