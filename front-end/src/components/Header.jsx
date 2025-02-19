import search from "../assets/icons/search.png";
import logoSpotify from "../assets/icons/logo-spotify.png";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="logo">
        <a href="/">
          <img src={logoSpotify} alt="Logo" />
        </a>
      </div>
      <div className="header__search">
        <img src={search} alt="Buscar" />
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Premium</button>
        <button className="subscribe">Suporte</button>
        <button className="subscribe">Baixar</button>
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
