import React from 'react';

function Header() {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      />
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>Agregados recientemente</li>
          <li>Mi lista</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
