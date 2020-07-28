import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import './Menu.css'

function Menu() {
    return (
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="WANFLIX logo" />
        </a>

        <Button as="a">Novo vídeo</Button>
      </nav>
    );
}

export default Menu;