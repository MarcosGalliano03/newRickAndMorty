import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import estilos from "./styles/nav.module.css";

export default function Nav(props) {
  return (
    <div className={estilos.divNav}>
      <SearchBar onSearch={props.onSearch} />
      <div className={estilos.navDivUl}>
        <ul>
          <li>
            <Link to="/about">
              <button>
                <h3>About</h3>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <button>
                <h3>Home</h3>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <button>
                <h3>Liked</h3>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/all">
              <button>
                <h3>All Chars</h3>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
