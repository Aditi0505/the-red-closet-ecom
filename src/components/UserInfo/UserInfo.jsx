import { useAuth } from "../../context";

const UserInfo = () => {
  const { authState } = useAuth();
  const { user } = authState;
  return (
    <div className="outer-wrapper">
      <div className="flex-center profile full-height display-screen flex-column">
        <div className="flex-column">
          <h1>Your Profile</h1>
          <p className="text-md text-left">{`Name: ${user.firstName} ${user.lastName}`}</p>
          <p className="text-md text-left">{`Email: ${user.email}`}</p>
        </div>
      </div>
    </div>
  );
};
export { UserInfo };
