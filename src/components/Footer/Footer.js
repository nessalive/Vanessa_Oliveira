import React from 'react';
import '../Footer/Footer.css';
import gitHub from '../../assets/github.jpg';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <>
      <div className="caixa_icon">
          <p className="minetexto">Feito com amor\ 2020 </p>
            <a
              href="https://github.com/nessalive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon_img" src={gitHub} alt="icon do gitHub "/>
            </a>
            <a
              href="https://www.linkedin.com/in/vanessa-oliveira-0036a4154/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon_img"
                src={linkedin}
                alt="icon do linkedin "
                />
            </a>
          </div>
    </>
  )
}

export default Footer;


