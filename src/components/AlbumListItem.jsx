/* eslint-disable react/prop-types */
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";
import ExpandablePanel from "./ExpandablePanel";
import { GoXCircle } from "react-icons/go";
import Button from "./Button";
export default function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
        className="mr-2 border-0"
      >
        <GoXCircle />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}
