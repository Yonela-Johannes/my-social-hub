import styles from "./comments.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const  status = 'authenticated'
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link to="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {loading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item?._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <img
                      src={item?.user?.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item?.user?.name}</span>
                    <span className={styles.date}>{item?.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item?.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
