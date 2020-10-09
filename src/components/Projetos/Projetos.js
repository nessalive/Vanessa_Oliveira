import React from 'react';

import '../Projetos/Projetos.css';
import bateria from '../../assets/bateria.JPG';
import cafe from '../../assets/cafe.JPG';
import contado from '../../assets/Contado.JPG';
import jogo from '../../assets/Jogo.JPG';
import gato from '../../assets/gato.JPG';

const Projetos = () => {
  return (
    <div>
      <h2 className="titulo">Alguns dos meus trabalhos</h2>
      <div className="caixaProjetos">
      <div>
        <img className="imgProjetos" src={bateria} alt="foto de um site"/>
          <a className="conteudo" href="https://nessalive.github.io/KitBateria/" target="_blank" rel="noopener noreferrer">Site para ver a bateria</a>
      </div>

      <div>
        <img className="imgProjetos" src={cafe} alt="foto de um site"/>
          <a className="conteudo" href="https://nessalive.github.io/site00001/" target="_blank" rel="noopener noreferrer">Site para ver o café</a>
      </div>

      <div>
        <img className="imgProjetos" src={contado} alt="foto de um site"/>
          <a className="conteudo" href="https://contador-react.vercel.app/" target="_blank" rel="noopener noreferrer">Site para ver o contador</a>
      </div>

      <div>
        <img className="imgProjetos" src={gato} alt="foto de um site"/>
          <a className="conteudo" href="https://atividade-react.vercel.app/" target="_blank" rel="noopener noreferrer">Site para ver gatinho</a>
      </div>

      <div>
        <img className="imgProjetos" src={jogo} alt="foto de um site"/>
          <a className="conteudo" href="https://play-pedra-papel-tesoura.netlify.app/" target="_blank" rel="noopener noreferrer">Site para ver um jogo</a>
      </div>

      </div>
      <a className="conteudo" href="https://vanessa-oliveira.netlify.app/" target="_blank" rel="noopener noreferrer">Veja meu Curriculo também</a>
    </div>
  )
}

export default Projetos;
