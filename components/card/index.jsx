import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Container, Add } from "./styles";
import { AddHabit } from "../addTarfa";

export default function Card(props) {
  const [addNew, setAddNew] = useState(false);
  return (
    <Container>
      <label>{props.label}</label>
      <div>
        <Add onClick={() => setAddNew(true)}>
          <AiOutlinePlus />
        </Add>
        {addNew && <AddHabit />}
      </div>
    </Container>
  );
}
