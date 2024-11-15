import React, { useEffect, useState } from "react";
import { fetchCommentsFromFireStore } from "../firebase/FireBaseFunctions";
import AFScreenHeader from '../components/AFScreenHeader'
import AFButton from "../components/AFButton";
import '../pages/pages.css'
import { useNavigate } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchComments = async () => {
      setLoader(true)
      const fetchedComments = await fetchCommentsFromFireStore();
      setLoader(false)
      setComments(fetchedComments);
      console.log(fetchedComments);
    };

    fetchComments();
  }, []);

  return (
    <>
      <div className=" h-screen ">

        <div className="">
          <AFScreenHeader Title={"Comments"} actionButtons={[
            {
              display: () => (
                <AFButton lable="Add  a Comment" onClick={() => navigate('/CommentForm')} />
              )
            }
          ]} />
          {loader &&(
            <div className="">
            <img
                src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87_w200.gif'
                alt="Loading..."
                className="loader"
            />
        </div>
          )}

        </div>
        {!loader && (
          <div className="flex flex-wrap justify-around gap-2 m-4 ">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white w-[25vw] gh  text-center justify-center items-center">
                <div>
                </div> <strong>{comment.userName}</strong>:
                <p>
                  {comment.message}
                </p>
                <p>
                  {comment.timestamp}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Comments;
