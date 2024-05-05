import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import { MainPage, UserInfoPage, UsersPage } from "./pages";
import { Playlists } from "./pages/PlaylistsPage/PlaylistsPage";

export function App() {
	return (
		<BrowserRouter>
			<div className="header">_</div>

			<div className="section">
				<nav className="navMenu">
					<Link to={"/"}>Main</Link>
					<Link to={"/users"}>Users</Link>
					<Link to={"/playlists"}>Playlists</Link>
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
