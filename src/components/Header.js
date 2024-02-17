import React from "react";

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__counter'>
        <h2 id='counter-days'>19</h2>
        <p>days</p>
      </div>
      <div>
        <h1 className='header__heading'>
          <span className='header__heading-span'>
            Fantastic4 cruise countdown
          </span>
        </h1>
      </div>
    </header>
  );
};
