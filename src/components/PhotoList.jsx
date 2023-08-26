/* eslint-disable react/prop-types */
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotoListItem from "./PhotoListItem";
import { faker } from "@faker-js/faker";

export default function PhotoList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) content = <Skeleton times={10} className="h-20 w-20 ml-3" />;
  else if (error) content = <div>Error: {error.message}</div>;
  else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-rows justify-between items-center">
        <h3 className=" text-lg font-bold">Photos in {album.title}</h3>
        <Button
          loading={results.isLoading}
          onClick={handleAddPhoto}
          secondary
          outline
        >
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-rows flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}
