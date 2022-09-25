import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { ThemeChanger } from "../ThemeChanger";
import Link from "next/link";
import * as S from "./style";
import { ExitIcon } from "../Icons/Exit";

export const Header = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const connectWithMetamask = useMetamask();

  return (
    <S.Container>
      <Link href={"/"}>
        <S.LogoTitle>
          Bruno's
          <S.LogoSubTitle>NFTS</S.LogoSubTitle>
        </S.LogoTitle>
      </Link>
      <S.ButtonContainer>
        <S.SpaceBox>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
          >
            <S.GroupItems>
              <S.Animation />
              <S.TextContainer>
                <ExitIcon />
                <S.ButtonTittle>
                  {address
                    ? address.slice(0, 6) + "..." + address.slice(-4)
                    : "Sign In"}
                </S.ButtonTittle>
              </S.TextContainer>
            </S.GroupItems>
          </button>

          <ThemeChanger />
        </S.SpaceBox>
      </S.ButtonContainer>
    </S.Container>
  );
};
