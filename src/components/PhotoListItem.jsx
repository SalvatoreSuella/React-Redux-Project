/* eslint-disable react/prop-types */
import { useRemovePhotoMutation } from "../store";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { GoXCircle } from "react-icons/go";
import Button from "./Button";
export default function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation(photo);

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  const classes = twMerge(
    classNames(
      "absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80",
      {
        "opacity-80 bg-gray-200": results.isLoading,
      }
    )
  );

  return (
    <div className="relative m-2 cursor-pointer">
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
      <div className={classes}>
        <Button
          loading={results.isLoading}
          onClick={handleRemovePhoto}
          className="border-0 text-3xl text-black"
        >
          <GoXCircle />
        </Button>
      </div>
    </div>
  );
}
