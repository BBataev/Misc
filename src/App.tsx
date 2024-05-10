import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import { MainPage, UserInfoPage, UsersPage } from "./pages";
import { Playlists } from "./pages/PlaylistsPage/PlaylistsPage";
import { useEffect, useState } from "react";
import { PlaylistInfoPage } from "./pages/PlaylistInfoPage/PlaylistInfoPage";

export function App() {
  const [active, setActive] = useState([false, false, false]);

  const currentUrl = window.location.href;

  const urlParts = currentUrl.split("/");

  const firstPathSegment = urlParts[3];

  useEffect(() => {
    if (firstPathSegment === "users") {
      setActive([false, true, false]);
    } else if (firstPathSegment === "playlists") {
      setActive([false, false, true]);
    }
  }, []);

  const handleLinkClick = (index: number) => {
    const newActiveLinks = active.map((_, i) => i === index);
    setActive(newActiveLinks);
  };

  return (
    <BrowserRouter>
      <div className="header">
        <Link className="header__logo" to={"/"}>
          Misc
        </Link>
      </div>

      <div className="section">
        <nav className="navMenu">
          <Link
            className={active[0] ? "navMenu__link active" : "navMenu__link"}
            onClick={() => {
              handleLinkClick(0);
            }}
            to={"/"}
          >
            Main
          </Link>
          <Link
            className={active[1] ? "navMenu__link active" : "navMenu__link"}
            onClick={() => {
              handleLinkClick(1);
            }}
            to={"/users"}
          >
            Users
          </Link>
          <Link
            className={active[2] ? "navMenu__link active" : "navMenu__link"}
            onClick={() => {
              handleLinkClick(2);
            }}
            to={"/playlists"}
          >
            Playlists
          </Link>
          <div className="navMenu__indicator"></div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId" element={<UserInfoPage />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/playlists/:playlistId" element={<PlaylistInfoPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
