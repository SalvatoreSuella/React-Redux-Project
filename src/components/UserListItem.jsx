/* eslint-disable react/prop-types */
import { GoXCircle } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

export default function UsersListItem({ user }) {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleDeleteUser = (user) => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button
        className="mr-3 border-0"
        loading={isDeletingUser}
        onClick={() => handleDeleteUser(user)}
      >
        <GoXCircle className="text-xl" />
      </Button>
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}
