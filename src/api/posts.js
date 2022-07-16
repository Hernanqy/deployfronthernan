import axios from "axios";

export const getPostsRequest = async () => {
  try {
    const res = await axios.get("https://deploydelback.herokuapp.com/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostRequest = async (id) => {
  try {
    const res = await axios.delete("https://deploydelback.herokuapp.com//" + id);
    console.log(res.status);
    return res.status;
  } catch (error) {
    console.log(error);
  }
};

export const createPostRequest = async (post) => {
  try {
    const form = new FormData();
    for (let key in post) {
      form.append(key, post[key]);
    }
    console.log("aca en el create", form);
    const res = await axios.post("https://deploydelback.herokuapp.com/", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.status;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export const getPostRequest = async (id) => {
  try {
    const res = await axios.get("https://deploydelback.herokuapp.com//" + id);
    
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updatePostRequest = async (id, newPostFields) => {
  console.log("antes de que empiece todo", id, newPostFields);
  try {
    const form = new FormData();
    for (let key in newPostFields) {
      form.append(key, newPostFields[key]);
    }
    console.log("antes de que se caiga ", form);
    const res = await axios.patch("https://deploydelback.herokuapp.com//" + id, newPostFields, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("respuesta de axios patch", res);
    return res.status;
  } catch (error) {
    console.log("aca en el error del updatepostrequest", error);
    return error.response.data;
  }
};
