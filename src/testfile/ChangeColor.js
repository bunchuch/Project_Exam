import { createContext, useContext, useState } from "react";
import Element from "./ResponeTest";
import ThemeContext from "./ThmenContext";

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };


  export default function ChangeColors (){



    return (
        <ThemeContext.Provider value={themes.dark}>
            <Element/>
        </ThemeContext.Provider>
    )
  } 