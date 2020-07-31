import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// import { Container } from './styles';

function Categoria() {
  const CATEGORIA_VALORES_INICIAIS = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(CATEGORIA_VALORES_INICIAIS);

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';

    fetch(url).then(async (response) => {
      const data = await response.json();
      setCategorias([...data]);
    });
  }, []);

  function handleSubmit(event) {
    setCategorias([...categorias, categoria]);
    setCategoria(CATEGORIA_VALORES_INICIAIS);
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setCategoria({ ...categoria, [name]: value });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro Categoria:
        {categoria.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          name="nome"
          type="text"
          value={categoria.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          as="textarea"
          value={categoria.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={categoria.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((value, index) => (
          <li key={`${value.id}`}>{value.titulo}</li>
        ))}
      </ul>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default Categoria;
