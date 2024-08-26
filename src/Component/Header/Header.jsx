import React from "react";
import c from "./Header.module.css";

const Header = (props) => {
  return <div className={c.header} >
    <div class={c.sign}>
    <span class={c.sign_word}>What-where-when?</span>
</div>
    {/* <p className={c.name} >What-where-when?</p> */}
    </div>;
};

export default Header;
