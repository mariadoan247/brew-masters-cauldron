import * as React from "react";
import NavBar from "../wrappers/NavBar";

export default function Monsters({ mode, theme, colorMode }) {
  return <NavBar mode={mode} theme={theme} colorMode={colorMode} />;
}
