import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../constants/base_urls";
import moment from "moment";
// import AddComment from "./add-comment";

export default function Comments({
  blogId,
  userId,
  setCommentsCount,
  commentInput,
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (blogId) {
      const fetchComments = async () => {
        try {
          const response = await fetch(
            `${baseUrl}blog-comment/all-comments/${blogId}`
          );
          if (response.ok) {
            const data = await response.json();
            setData(data);
          } else {
            console.error(`Error: ${response.status}`);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchComments();
      setCommentsCount(data?.length);
    }
  }, [blogId, data]);

  return (
    <>
      <div className="flex flex-col gap-6 my-4 mx-4">
        {data.slice(0, 1)?.map((item) => (
          <div key={`${item.comment}-${item.displayName}`} className="flex flex-col">
            <div className="flex gap-2 items-center justify-start">
              {item?.user?.picture && (
                <img
                  src={item?.user?.picture}
                  alt="avatar"
                  className='w-8 h-8 object-cover object-center rounded-full'
                />
              )}
              <span className="mr-1 font-bold">{item?.user?.given_name}</span>
            </div>
            <div className="flex justify-between text-[14px] items-center">
              <span>{item?.comment}</span>
            </div>
          </div>
        ))}
      </div>
      {/* <AddComment
        docId={docId}
        data={data}
        setComments={setComments}
        commentInput={commentInput}
      /> */}
    </>
  );
}
