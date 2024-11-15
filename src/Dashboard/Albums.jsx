import React, { useEffect, useState } from "react";
import { fetchAlbumsFromFireStore} from "../firebase/FireBaseFunctions";
import AFScreenHeader from '../components/AFScreenHeader';
import AFButton from "../components/AFButton";
import { useNavigate } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoader(true)
      const fetchedAlbums = await fetchAlbumsFromFireStore();
      setLoader(false)
      setAlbums(fetchedAlbums);
      console.log(fetchedAlbums);
    };

    fetchAlbums();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <AFScreenHeader
        Title="Albums"
        actionButtons={[
          {
            display: () => (
              <AFButton lable="Add New Album" onClick={() => navigate('/AlbumsForm')} />
            )
          }
        ]}
      />
      {loader &&(
        <div className="">
        <img
            src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87_w200.gif'
            alt="Loading..."
            className="loader"
        />
    </div>
      )}
      {!loader && (

        <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {albums.map((album) => (
            <div key={album.id} className="bg-white rounded-lg shadow-md p-4">
              {album.coverImageUrl ? (
                <img
                  src={album.coverImageUrl}
                  alt={album.title || "Album Cover"}
                  className="w-full h-40 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
                  No Cover Image
                </div>
              )}
              <div className="mt-4">
                <h2 className="text-lg font-bold">{album.title || "Untitled Album"}</h2>
                <p className="text-gray-600">Artist: {album.artist || "Unknown Artist"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        )}
    </div>
  );
};

export default Albums;
