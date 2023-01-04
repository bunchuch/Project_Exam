import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThmenContext";




function ThemedButton() {
    const theme = useContext(ThemeContext)
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }



export default function Element  (props){
    return <div>
        <ThemedButton/>
    </div>

}

