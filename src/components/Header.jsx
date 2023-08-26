import { AiFillBell } from "react-icons/ai";
import { IoBagSharp, IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/indir.svg";
import profil from "../assets/profil.jpg";
import { useSelector } from "react-redux";

const Header = () => {
  const { basketState, favoriteState } = useSelector((store) => ({
    basketState: store.basketState,
    favoriteState: store.favoriteState,
  }));

  console.log(basketState);
  console.log("fav", favoriteState);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="d-block d-md-none">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link
              className="navbar-brand mt-2 mt-lg-0 d-none d-lg-block"
              to="/"
            >
              <img src={logo} height="25" />
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Women
                </Link>
              </li>
              <hr className="border d-none d-md-block" />
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Men
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Link className={`${favoriteState.favorite.length === 0 ? "text-dark" : "text-success"}`}
            
            to="/favorite">
              <IoHeartSharp className=" fs-3 " />
              <span className="badge rounded-pill badge-notification bg-info">
                {favoriteState.favorite.length !== 0
                  ? favoriteState.favorite.length
                  : ""}
              </span>
            </Link>

            <div className="dropdown">
              <a
                className=" dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <AiFillBell className="text-warning fs-3" />
                <span className="badge rounded-pill badge-notification bg-danger">
                  2
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="p-2">
                  <a className="dropdown-item" href="#">
                    News
                    <span className="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                    <span className="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <Link className={`${basketState.basket.length === 0 ? "text-dark" : "text-info"}`}
             to="/basket">
              <IoBagSharp className=" fs-3 " />
              <span className="badge rounded-pill badge-notification bg-success">
                {basketState.basket.length !== 0
                  ? basketState.basket.length
                  : ""}
              </span>
            </Link>
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profil}
                  className="rounded-circle"
                  height="35"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
