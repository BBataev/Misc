import { useParams } from "react-router-dom";
import { USERS } from "../../data";
import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>пользователя таким userId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="user">
			<div className="user__topInfo">
				<img className="topInfo__avatar" src={user.avatar} alt="User's avatar" width={250} height={250} />
				<div className="topInfo__userInfo">
					<p className="userInfo__name">
						{user.fullName}
					</p>
					<p className="userInfo__job">
						{user.jobTitle}
					</p>
					<p className="userInfo__email">
						{user.email}
					</p>
				</div>
			</div>
			<p className="user__bio">
				{user.bio}
			</p>
		</div>
	);
}
