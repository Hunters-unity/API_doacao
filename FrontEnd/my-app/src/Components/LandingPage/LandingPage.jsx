import React, {Component} from 'react';
import axios from 'axios'
import '../../css/AppStyle.css';
import ilustracao1 from '../Imagens/ilustracao-1.png';
import ilustracao2 from '../Imagens/ilustracao-2.png';
import ilustracao3 from '../Imagens/ilustracao-3.png';
import ilustracao4 from '../Imagens/ilustracao-4.png';
import ilustracao5 from '../Imagens/ilustracao-5.png';
import ilustracao6 from '../Imagens/ilustracao-6.png';
import ilustracao7 from '../Imagens/ilustracao-7.png';
import logoEduacao from '../Imagens/logo-eduacao.png';
//import logoFCamara from '../Imagens/logo-fcamara.png';
//import logoFacebook from '../Imagens/logo-facebook.png';
//import logoInstagram from '../Imagens/logo-instagram.png';

import CardAluno from '../Aluno/CardAluno';



class Landing extends Component {
  render () {
    return (  
     <div>
       <section className="secao-landing">
         <div className="row">
           <div className="col">
             <h1 className="titulo-1">Somos um construtor de sonhos!</h1>
             <h4 className="titulo-4">Doe mais do que matérias, ajude a construir sonhos e o futuro das crianças.</h4>
             <a className="botao-doacao"><button className="btn btn-warning">Doar Agora</button></a>
            </div>
           <div className="col">
             <img src={ilustracao6}/>
            </div>
         </div>
          
          
          
       </section>
       <section className="secao-landing">
          <h2 className="titulo-2">Doar nunca foi tão simples</h2>
          <div className="row">
            <div className="col-xl">
              <img src={ilustracao1}/>
              <h3 className="titulo-3">Localize uma escola</h3>
              <h4 className="titulo-4">Você verá o perfil dos alunos e os itens que eles gostariam de receber.</h4>
            </div>
            <div className="col-xl">
              <img src={ilustracao2}/>
              <h3 className="titulo-3">Selecione os materiais</h3>
              <h4 className="titulo-4">Na lista do alunos selecione um ou vários itens que você gostaria de doar!</h4>
            </div>
            <div className="col-xl">
              <img src={ilustracao3}/>
              <h3 className="titulo-3">Pronto! Só finalizar!</h3>
              <h4 className="titulo-4">Agora é só combinar a entrega ou gerar uma etiqueta para enviar pelo correios!</h4>
            </div>
          </div>
       </section>
       <section className="secao-landing">
         <h2 className="titulo-2">Listas Recentes</h2>
         <h4 className="titulo-4">Confira as listas de materiais recém-adicionadas:</h4>
         <div className="row meu-container-cards">
           <div className="col-md">
            <CardAluno/>
           </div>
           <div className="col-md">
            <CardAluno/>
           </div>
           <div className="col-md">
            <CardAluno/>
           </div>
          </div>
       </section> 
       <section className="banner-escola-landing">
         <h2 className="titulo-2">Por que cadastrar sua escola no EDUação?</h2>
         <div className="row">
           <div className="col-xl">
            <img src={ilustracao4}/>
            <h3 className="titulo-3">Segurança</h3>
           </div>
           <div className="col-xl">
             <img src={ilustracao7}/>
             <h3 className="titulo-3">Facilidade</h3>
            </div>
           <div className="col-xl">
              <img src={ilustracao5}/>
              <h3 className="titulo-3">Gratuito</h3>
            </div>
         </div>
        </section>
        <footer className="rodape-landing">
          <div className="rodape-menu">
          <img src={logoEduacao}/>
          <img />
          </div>
        
        <div className="rodape-rede-social">
          <p>Desenvolvido por Squad 2</p>
        </div>
        

        </footer>
      
     </div>
    );
  }
 }

export default Landing;