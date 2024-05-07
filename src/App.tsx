import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import { MainPage, UserInfoPage, UsersPage } from "./pages";
import { Playlists } from "./pages/PlaylistsPage/PlaylistsPage";
import { useEffect, useState } from "react";

export function App() {
	const [active, setActive] = useState([false, false, false]);

    useEffect(() => {
        const savedActiveState = JSON.parse(localStorage.getItem("activeLinks") || "null");
        if (savedActiveState) {
            setActive(savedActiveState);
        }
    }, []);

	const handleLinkClick = (index: number) => {
		const newActiveLinks = active.map((_, i) => i === index);
		setActive(newActiveLinks);
		localStorage.setItem("activeLinks", JSON.stringify(newActiveLinks));
	  };

	return (
		<BrowserRouter>
			<div className="header">
				<Link className="header__logo" to={"/"}>Misc</Link>
			</div>

			<div className="section">
				<nav className="navMenu">
					<Link className={active[0] ? "navMenu__link active" : "navMenu__link"} onClick={() => {handleLinkClick(0)}} to={"/"}>Main</Link>
					<Link className={active[1] ? "navMenu__link active" : "navMenu__link"} onClick={() => {handleLinkClick(1)}} to={"/users"}>Users</Link>
					<Link className={active[2] ? "navMenu__link active" : "navMenu__link"} onClick={() => {handleLinkClick(2)}} to={"/playlists"}>Playlists</Link>
					<div className="navMenu__indicator"></div>
				</nav>

				<main className="content">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/users" element={<UsersPage />} />
						<Route path="/users/:userId" element={<UserInfoPage />} />
						<Route path="/playlists" element={<Playlists />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}
