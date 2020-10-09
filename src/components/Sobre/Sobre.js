import React from 'react';
import nessa from '../../assets/Vanessa2.jpg'
import '../Sobre/Sobre.css'

const Sobre = () => {
  return (
    <>
        <main class="caixaSobre">
                <img className="foto" src={nessa} alt="rosto de uma menina" width="200px"/>
                
                <div> 
                   <h3 class="nome">Vanessa Oliveira</h3>
                    <p class="me">olá, sou programadora front-end, poetiza, cristã, designer, curiosa sobre café, amante dos gatinhos, inclusive 
                        tenho um gatinho chamado salém, gosto de ler, ficar na praça e cozinha quenho varios objetivos
                        e batalho muito para tentar realizar esses feitos, esse e meu primeiro projeto de outros que 
                        viram e se você quiser conheçer mais dos meus projetos e de algumas coisas que eu posto por lá
                        vou deixar minhas redes aqui em baixo, obrigada por ver o projeto e lembre-se beba água.</p>
                </div>
            </main>
    </>
  )
}

export default Sobre;
