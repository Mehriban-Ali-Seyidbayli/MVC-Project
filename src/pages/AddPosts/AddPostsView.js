import Header from "../../components/Header/Header";


const AddPostsView = ({ onInputChange, handleSubmit }) => {
    return (
        <>
            <Header addLink />
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>User</label>
                    <input onChange={(e) => onInputChange("user", e.target.value)} type="text" />
                </fieldset>

                <fieldset>
                    <label>Title</label>
                    <input onChange={(e) => onInputChange("title", e.target.value)} type="text" />
                </fieldset>

                <fieldset>
                    <label>Text</label>
                    <textarea onChange={(e) => onInputChange("text", e.target.value)} />
                </fieldset>

                <button type="submit">Send</button>
            </form>


        </>
    )
}

export default AddPostsView;