import React from "react";
import c from "./Header.module.css";

const Header = (props) => {
  return <div className={c.header} >
    <div class={c.sign}>
    <span class={c.sign_word}>Что-где-когда?</span>
</div>
    </div>;
};

export default Header;
