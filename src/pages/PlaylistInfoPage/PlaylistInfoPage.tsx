import { useParams } from "react-router-dom";
import "./PlaylistInfoPage.css";
import { PLAYLISTS } from "../../data";

export const PlaylistInfoPage = () => {
  const { playlistId } = useParams();
  const playlist = PLAYLISTS[Number(playlistId)];

  if (!playlist) {
    return (
      <div className="userInfoPage">
        <div className="users">
          <p>There is no playlist with this id</p>
        </div>
      </div>
    );
  }

  return (
    <div className="playlist">
      <div className="playlist-info">
        <h2 className="info__name">{playlist.name}</h2>
        <p className="info__genre">{playlist.genre}</p>
      </div>
      <div className="playlist-songs">
        {playlist.songs.map((song, index) => {
          return (
            <p className="songs__song" key={index}>
              {song}
            </p>
          );
        })}
      </div>
    </div>
  );
};
