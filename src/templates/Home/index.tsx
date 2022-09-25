import { Collections } from "../../components/Collections";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Container } from "./style";

export const HomeTemplate = () => {
  return (
     <Container>
      <Header />
      <Hero />
      <Collections />
    </Container>
  );
};
