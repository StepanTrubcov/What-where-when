import React from "react";
import c from "./Header.module.css";

const Header = (props) => {
  return <div className={c.header} >
    <div class={c.sign}>
    <span class={c.sign_word}>What-where-when?</span>
    {/* <div className={c.monster}></div> */}
</div>
    </div>;
};

export default Header;
