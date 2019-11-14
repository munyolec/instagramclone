import axios from 'axios';
import { GET_POSTS, DELETE_POSTS,ADD_POST } from './types';
import {createMessage, returnErrors} from './messages';

//GET POSTS
export const getPosts=()=>(dispatch, getState)=>{
    axios
    .get("/api/posts/")
    .then(res=>{
        dispatch({
            type:GET_POSTS,
            payload:res.data
        });
      })
      .catch(err=>console.log(err));
}
//DELETE POSTS
export const deletePost =(id) => (dispatch, getState) => {
    axios
    .delete(`/api/posts/${id}/`)
    .then(res=>{
        dispatch(createMessage({deletePost:'Post Deleted'}));
        dispatch({
        type:DELETE_POSTS,
        payload:id 
    });
})
.catch(err =>console.log(err));
}
//ADD POST
export const addPost =(post) => (dispatch, getState) => {
    axios
    .post("/api/posts/",post)
    .then(res=>{
        console.log(res)
        dispatch(createMessage({addPost:'post added'}));
        dispatch({
        type: ADD_POST,
        payload: res.data
    }).catch((err) => {
        console.log("failed to upload file")
        dispatch(createMessage("failed to upload file"))
        console.log(err)
    })
})

}