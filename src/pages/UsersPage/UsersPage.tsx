import { ChangeEvent } from "react";
import { USERS } from "../../data";
import "./UsersPage.css";
import { Link, useSearchParams } from "react-router-dom";

export function UsersPage() {
  const [searchParam, setSearchParam] = useSearchParams();

  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParam({ searchName: value.toLowerCase() });
  };

  const searchName = searchParam.get("searchName") || "";

  const filteredUsers = USERS.filter(({ fullName }) =>
    fullName.toLowerCase().includes(searchName)
  );

  return (
    <div className="usersPage">
      <div className="usersPage__startInfo">
        <h2 className="startInfo__title">Users</h2>
        <label className="startInfo__search">
          <h4 className="search__title">Fast Search</h4>
          <input
            className="search__input"
            type="text"
            value={searchName}
            onChange={handleSearchName}
          />
        </label>
      </div>

      <div className="users__usersList">
        {filteredUsers.map(({ id, avatar, fullName }) => (
          <Link className="link" to={`/users/${id}`} key={id}>
            <img className="link__userPhoto" src={avatar} alt="User's photo" />
            <h3 className="link__username">{fullName}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
