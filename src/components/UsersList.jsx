import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UserListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function UsersList() {
  const dispatch = useDispatch();

  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) content = <Skeleton times={6} className="h-10 w-full" />;
  else if (loadingUsersError)
    content = <div>Error: {loadingUsersError.message}</div>;
  else {
    content = data.map((user) => {
      return <UsersListItem user={user} key={user.id} />;
    });
  }

  return (
    <div>
      <div className="flex flex-rows justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button
          secondary
          outline
          loading={isCreatingUser}
          onClick={handleAddUser}
        >
          + Add User
        </Button>
      </div>
      {content}
      {isCreatingUser && <Skeleton times={1} className="h-10 w-full" />}
    </div>
  );
}
