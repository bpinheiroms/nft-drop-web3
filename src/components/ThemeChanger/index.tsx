import { useEffect, useState } from "react";
import { Switch } from "../Buttons/Switch";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Switch />;
};
