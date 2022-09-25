import { ItemCollection } from "./Item";
import * as S from "./style";

export const Collections = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Section>
          <S.Title>
            <S.TitleSpan>Explore</S.TitleSpan> the collections:
          </S.Title>
        </S.Section>
        <S.ItemContainer>
          <S.ItemData>
            <ItemCollection
              url="punk"
              title="The Punks"
              description="Great Punk Collection"
              name="PUNK"
            />
            <ItemCollection
              url="bayc"
              title="The Apes"
              description="Great Ape Collection"
              name="APE"
            />
            <ItemCollection
              url="doodle"
              title="The Doodles"
              description="Great Doodle Collection"
              name="DOODLE"
            />
            <ItemCollection
              url="azuki"
              title="Azuki"
              description="Great Azuki Collection"
              name="AZUKI"
            />
          </S.ItemData>
        </S.ItemContainer>
      </S.Box>
    </S.Container>
  );
};
