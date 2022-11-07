import React, { useState } from "react";
import { Container } from "./styles";
import Select from "react-select";

export function AddHabit() {
  const [name, setName] = useState();
  const options = [
    {
      value: 1,
      label: "check List",
    },
    {
      value: 2,
      label: "Tarfe Simples",
    },
    {
      value: 3,
      label: "Tarfe com hora marcada",
    },
  ];
  return (
    <Container>
      <label id="tarefa"> Nome da taréfa</label>
      <input id="tarrefa" />
      <label>Selecione o tipo de tarefa</label>
      <Select options={options}></Select>
    </Container>
  );
}
