import React, { useState } from "react";
import "./styles.css"

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenuKeyDown(event) {
    if (event.key === "Enter") {
      setOpenMenu(!openMenu);
    } else if (event.key === "Escape") {
      setOpenMenu(false);
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <button
            onKeyDown={handleMenuKeyDown}
            onClick={handleMenuKeyDown}
            aria-haspopup="true"
            aria-expanded={openMenu}
          >
            Menu
          </button>
          {openMenu && (
            <ul>
              <li    onKeyDown={handleMenuKeyDown}>
                <a href="#" >Item 1</a>
              </li>
              <li    onKeyDown={handleMenuKeyDown}>
                <a href="#">Item 2</a>
              </li>
              <li    onKeyDown={handleMenuKeyDown}>
                <a href="#">Item 3</a>
              </li>
              <li    onKeyDown={handleMenuKeyDown}>
                <a href="#">Item 4</a>
              </li>
              <li    onKeyDown={handleMenuKeyDown}>
                <a href="#">Item 5</a>
              </li>
            </ul>
          )}
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
