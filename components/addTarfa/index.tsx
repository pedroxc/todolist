import React, { useState } from "react";
import { Container } from "./styles";
import Select from "react-select";
import { options } from "./utils";
export function AddHabit() {
  const [name, setName] = useState();
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <label id="tarefa"> Nome da taréfa</label>
      <input id="tarrefa" />
      <label>Selecione o tipo de tarefa</label>
      <Select
        className="select"
        onChange={(e) => handleChange(e)}
        options={options}
      ></Select>
    </Container>
  );
}
