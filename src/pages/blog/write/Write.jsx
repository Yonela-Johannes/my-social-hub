import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const Write = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");


  const handleSubmit = async () => {

  };

  return (
    <div>

      <button onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default Write;
