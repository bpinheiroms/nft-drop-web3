import * as S from "./style";

type Props = {
  url: string;
  title: string;
  description: string;
  name: string;
};

export const ItemCollection = ({ url, title, description, name }: Props) => {
  return (
    <S.Container>
      <S.Animation />
      <S.Box>
        <S.Block>
          <S.DataContainer>
            <S.ImageContainer>
              <S.Image src={`/images/${url}.png`} alt="" />
            </S.ImageContainer>
            <S.TextContainer>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
              <S.Name>{name}</S.Name>
            </S.TextContainer>
          </S.DataContainer>
        </S.Block>
      </S.Box>
    </S.Container>
  );
};
