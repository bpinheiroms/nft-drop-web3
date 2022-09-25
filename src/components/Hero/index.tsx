import { GridItem } from "./GridItem";
import * as S from "./style";

export const Hero = () => {
  return (
    <S.Container>
      <S.DescriptionContainer>
        <S.DescriptionText>
          The best <S.DescriptionSpan>NFTS</S.DescriptionSpan> in one place
        </S.DescriptionText>
      </S.DescriptionContainer>
      <S.Box>
        <GridItem />
      </S.Box>
    </S.Container>
  );
};
