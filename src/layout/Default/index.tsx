import { Box, Container, Gradient } from "./style";

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  return (
    <Container>
      <Gradient>
        <Box>
          <main>{children}</main>
        </Box>
      </Gradient>
    </Container>
  );
};
