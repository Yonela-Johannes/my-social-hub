import styles from "./comments.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../constants/base_urls";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";
import moment from "moment/moment";

const Comments = ({blogId, userId, setCommentsCount}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [desc, setDesc] = useState("");


  useEffect(() => {
    if(blogId){
      const fetchComments = async () => {
        try {
          const response = await fetch(`${baseUrl}blog-comment/all-comments/${blogId}`);
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
      setCommentsCount(data?.length)
    }
  },[blogId, data])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!desc) return toast("Required comment field");
    if (desc.length < 10)
    return toast("Comment should have a minimum of 10 characters");
    setLoading(true)
    const response = await axios.post(`${baseUrl}blog-comment`, {blogId, userId, comment: desc })
    if(response?.data?.status === 'success'){
      setLoading(false)
      setDesc("")
      return toast("Your comment has been added");

    }else{
      setLoading(false)
      setDesc("")
      return toast("Comment add failed");
    }
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <h1 className={styles.title}>Comments</h1>
      {userId ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            value={desc}
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="py-3 px-7 font-bold cursor-pointer bg-hover border-none hover:bg-secondary duration-300" onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link to="/signin">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {loading
          ? (
        <FallingLines
          color="#5A2E98"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
          )
          : data?.map((item) => (
              <div className={styles.comment} key={item?._id}>
                <div className={styles.user}>
                  {item?.user?.picture && (
                    <img
                      src={item?.user?.picture}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item?.user?.given_name} {item?.user?.family_name}</span>
                    <span className={styles.date}>{moment(item?.createdAt).fromNow()}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item?.comment}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
