class AddPostsModel {
    state = {
        id: Number(new Date().getTime()),
        user: "",
        title: "",
        text: ""
    }
}

export default AddPostsModel;