import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import data from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle="Como posso estudar melhor?"
        videoDescription="Como se organizar para estudar? É melhor estudar todos os dias um pouco ou escolher dias específicos? E para aprender muita coisa de uma só vez, qual a melhor técnica? Confira as dicas de aprendizagem do Guilherme Silveira no vídeo!"
        url="https://youtu.be/Is6c9KSGCbk"
      />

      {data.categorias.map((categoria) => (
        <Carousel ignoreFirstVideo={false} category={categoria} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
