import { ChangeEvent, useState } from "react"; // Импортируем useState
import { PLAYLISTS } from "../../data";
import { Link, useSearchParams } from "react-router-dom";

import "./PlaylistsPage.css";

export const Playlists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState(searchParams.get("searchName") || ""); 
  const [searchGenre, setSearchGenre] = useState(searchParams.get("searchGenre") || "");
  
  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchName(value);
    setSearchParams((params) => ({ ...params, searchName: value.toLowerCase() }));
  };

  const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchGenre(value);
    setSearchParams((params) => ({ ...params, searchGenre: value.toLowerCase() }));
  };

  const filteredPlaylists = PLAYLISTS.filter(({ name, genre }) =>
    name.toLowerCase().includes(searchName) && genre.toLowerCase().includes(searchGenre) && (genre !== "Non Music" && name !== "")
  );

  return (
    <div className="playlistsPage">
      <div className="usersPage__startInfo">
        <h2 className="startInfo__title">Playlists</h2>
        <label className="startInfo__search">
          <h4 className="search__title">Fast Search</h4>
          <div className="search-filters">
            <input
              className="filters__input"
              type="text"
              value={searchName}
              onChange={handleSearchName}
              placeholder="Enter name"
            />
            <input
              className="filters__input"
              type="text"
              value={searchGenre}
              onChange={handleSearchGenre}
              placeholder="Enter genre"
            />
          </div>
        </label>
      </div>
      <div className="playlistsPage-playlists">
      {
        filteredPlaylists.map(({id, name }) => (
          <Link className="playlists__playlist" to={`/playlists/${id}`} key={id}>
            <h3 className="playlist__name">
              {name}
            </h3>
          </Link>
        ))
      }
      </div>
    </div>
  );
};
