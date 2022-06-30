import { useAuth } from "../../context";

const UserInfo = () => {
  const { authState } = useAuth();
  const { user } = authState;
  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="outer-wrapper">
      <div className="flex-center full-height profile-screen flex-column">
        <div className="flex-column">
          <h1>Your Profile</h1>
          <p className="text-md text-left">{`Name: ${
            userData.user.firstName ?? user.firstName
          } ${userData.user.lastName ?? user.lastName}`}</p>
          <p className="text-md text-left">{`Email: ${
            userData.email ?? user.email
          }`}</p>
        </div>
      </div>
    </div>
  );
};
export { UserInfo };
