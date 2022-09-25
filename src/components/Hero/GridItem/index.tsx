import { DataItem } from "../DataItem";
import * as S from "./style";

export const GridItem = () => {
  return (
    <S.BoxGrid>
      <S.BoxItemLarge>
        <S.BoxDataContainer>
          <DataItem url="mayc" className="rounded-lg pt-2" />
        </S.BoxDataContainer>
        <S.BoxDataContainer>
          <DataItem url="bayc" className="rounded-lg" />
        </S.BoxDataContainer>
      </S.BoxItemLarge>
      <S.BoxItemMedium>
        <S.BoxDataContainer>
          <DataItem url="something" className="rounded-lg" />
        </S.BoxDataContainer>
        <S.BoxDataContainer>
          <DataItem url="punk" className="rounded-lg" />
        </S.BoxDataContainer>
      </S.BoxItemMedium>
      <S.BoxItem>
        <S.BoxDataContainer>
          <DataItem url="doodle" className="rounded-lg" />
        </S.BoxDataContainer>
        <S.BoxDataContainer>
          <DataItem url="azuki" className="rounded-lg" />
        </S.BoxDataContainer>
      </S.BoxItem>
    </S.BoxGrid>
  );
};
