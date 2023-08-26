/* eslint-disable react/prop-types */
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumListItem from "./AlbumListItem";
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function AlbumList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) content = <Skeleton className="h-10 w-full" times={3} />;
  else if (error) content = <div>Error: {error.message}</div>;
  else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-rows justify-between items-center m-3">
        <h3 className=" text-lg font-bold">Albums for {user.name}</h3>
        <Button
          loading={results.isLoading}
          onClick={handleAddAlbum}
          secondary
          outline
        >
          + Add Album
        </Button>
      </div>
      {content}
      {/* {results.isLoading && !results.error && (
        <Skeleton className="h-10 w-full" times={1} />
      )} */}
    </div>
  );
}
