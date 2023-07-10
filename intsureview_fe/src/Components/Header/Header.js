import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Mac Goods</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Services</li>
          <li className="header-nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
