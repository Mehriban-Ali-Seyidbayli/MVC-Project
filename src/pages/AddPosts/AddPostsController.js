import { useState } from "react";
import AddPostsView from "./AddPostsView";
import AddPostsModel from "./AddPostsModel";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddPostsController = () => {
    const navigate = useNavigate();

    const model = new AddPostsModel();

    const [form, setForm] = useState(model.state);

    const onInputChange = (label, value) => {
        var newInputState = { ...form };
        newInputState[label] = value;

        setForm(newInputState);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.user || !form.title || !form.text) {
            alert("Fill the form!")
        }

        axios.post("http://localhost:3004/posts", form)
            .then((res) => navigate("/"))
    }



    return (
        <AddPostsView onInputChange={onInputChange} handleSubmit={handleSubmit} />
    )
}

export default AddPostsController;