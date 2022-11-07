import { Container } from "./styles";
import Card from "../../components/card";

export default function Home() {
  return (
    <Container>
      <Card label="Manhã" />
      <Card label="Tarde" />
      <Card label="Noite" />
      <Card label="Qualquer Hora" />
    </Container>
  );
}
