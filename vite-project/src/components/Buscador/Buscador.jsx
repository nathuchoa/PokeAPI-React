import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import S from "./Buscador.module.css";

const Buscador = () => {
  const [inputNome, setInputNome] = useState("280");
  const [pokemon, setPokemon] = useState();

  function handleSetInput(target) {
    setInputNome(target.value);
  }

  async function handleRequisicao() {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputNome}`;
    const response = await fetch(url);
    const json = await response.json();

    const resposta = {
      foto: json.sprites.front_default,
      nome: json.name,
    };

    setPokemon(resposta);
    setInputNome("");
  }

  useEffect(() => {
    handleRequisicao();
  }, []);

  return (
    <div className={S.container}>
      <section className={S.containerInput}>
        <input
          className={S.input}
          type="text"
          placeholder="Insira um nome ou ID do pokemon"
          value={inputNome}
          onChange={({ target }) => handleSetInput(target)}
        />
        <button className={S.btn} onClick={handleRequisicao}>
          Buscar
        </button>
      </section>
      <section className={S.containerPokeBola}>
        <div>
          <picture >
            <img className={S.img} src={!!pokemon ? pokemon.foto : ""} />
          </picture>
          <p className={S.nome}>{!!pokemon && pokemon.nome}</p>
        </div>
      </section>
    </div>
  );
};

export default Buscador;
