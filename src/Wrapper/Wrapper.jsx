import React from 'react';
import c from './Wrapper.module.css'

const Wrapper = () => {
    return (
      <div className={c.blok} >
         <p className={c.text} >Ширина экрана маленькая!</p>
         <p className={c.text} >Переключитесь на ноутбук или компьютер, чтобы продолжить!</p>
      </div>
    );
};

export default Wrapper;