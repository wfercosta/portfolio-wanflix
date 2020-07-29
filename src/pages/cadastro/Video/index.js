import React from 'react';
import { Link } from "react-router-dom";
import PageDefault from '../../../components/PageDefault';

// import { Container } from './styles';

function Video() {
    return (
      <PageDefault>
        <h1>Cadastro Vídeo</h1>
        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </PageDefault>
    );
}

export default Video;