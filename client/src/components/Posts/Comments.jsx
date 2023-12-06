import { useState, useEffect } from "react";
import { baseUrl } from "../../constants/base_urls";
import { postComments } from "../../app/features/post/postsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Comments({ postId, userId, data }) {
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!desc) return toast("Required comment field");
    if (desc.length < 10)
      return toast("Comment should have a minimum of 10 characters");
    setLoading(true);
    const response = await axios.post(`${baseUrl}post-comment`, {
      postId,
      userId,
      comment: desc,
    });
    if (response?.data?.status === "success") {
      setLoading(false);
      setDesc("");
      return toast("Your comment has been added");
    } else {
      setLoading(false);
      setDesc("");
      return toast("Comment add failed");
    }
  };


  return (
    <div className="flex flex-col gap-6 my-4 mx-4">
      {data?.slice(0, 1)?.map((item) => (
        <div
          key={`${item?._id}-${item.user.given_name}`}
          className="flex flex-col"
        >
          <div className="flex gap-2 items-center justify-start">
            {item?.user?.picture && (
              <img
                src={item?.user?.picture}
                alt="avatar"
                className="w-8 h-8 object-cover object-center rounded-full"
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
  );
}
