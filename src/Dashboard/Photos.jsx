import React, { useEffect, useState } from "react";
import { fetchPhotosFromFireStore } from "../firebase/FireBaseFunctions";
import AFScreenHeader from '../components/AFScreenHeader';
import AFButton from "../components/AFButton";
import { useNavigate } from "react-router-dom";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoader(true);
      const fetchedPhotos = await fetchPhotosFromFireStore();
      setLoader(false);
      setPhotos(fetchedPhotos); // Update state with fetched photos
      console.log(fetchedPhotos);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <AFScreenHeader
        Title="Photos"
        actionButtons={[
          {
            display: () => (
              <AFButton lable="Add a Photo" onClick={() => navigate('/PhotosForm')} />
            )
          }
        ]}
      />

      {loader && (
        <div className="flex justify-center items-center h-64">
          <img
            src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87_w200.gif"
            alt="Loading..."
            className="loader"
          />
        </div>
      )}

      {!loader && (
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-lg shadow-md p-4">
                {photo.coverImageUrl ? (
                  <img
                    src={photo.coverImageUrl}
                    alt="Photo Cover"
                    className="w-full h-40 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
                    No Cover Image
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
