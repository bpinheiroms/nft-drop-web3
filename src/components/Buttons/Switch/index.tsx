import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Container, Animation, Item } from "./style";

export const Switch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        currentTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      <Container>
        <Animation />
        <Item>
          {currentTheme === "dark" ? (
            <BsSunFill className="text-yellow-500 text-xl" />
          ) : (
            <BsMoonFill className="text-yellow-500 text-xl" />
          )}
        </Item>
      </Container>
    </button>
  );
};
