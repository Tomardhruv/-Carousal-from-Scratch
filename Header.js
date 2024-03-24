import { useState } from "react";

const Title = () => (
  <h1 id="title" key="h2">
    Avataar
  </h1>
);

const Header = () => {
  let [searchtext] = useState();
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ELECTRONICS</li>
          <li>BOOKS</li>
          <li>MUSIC</li>
          <li>MOVIES</li>
          <li>CLOTHING</li>
          <li>GAMES</li>

          <select className="Dropdown" id="dropdwn">
            <option value="">MORE</option>
            <option value="furniture">Furniture</option>
            <option value="trAVEL">TRAVEL</option>
            <option value="botANICAL">BOTANICAL</option>
          </select>

        </ul>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search something"
          value={searchtext}
          onChange={(e) => {
            searchtext = e.target.value;
          }}
        ></input>
      </div>
    </div>
  );
};

export default Header;
