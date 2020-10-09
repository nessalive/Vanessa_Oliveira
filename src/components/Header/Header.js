import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  return(
    <div className="caixaHeader">
      <ul className="lista">
        <li><Link to="/" className="conteudo">Sobre</Link></li>
        <li> <Link to="/Projetos" className="conteudo">Projetos</Link></li>
      </ul>
    </div>
  )
}

export default Header;