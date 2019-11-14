import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts, deletePost} from '../../actions/posts';

export class Posts extends Component {
   static propTypes={
       posts:PropTypes.array.isRequired,
       getPosts:PropTypes.func.isRequired,
       deletePost:PropTypes.func.isRequired

   };
   componentDidMount(){
       this.props.getPosts();
   }
   
    render() {
        return (
            <Fragment>
                <h1>Posts</h1>               
                <table className="table table-striped">
                     <tbody>
                        {this.props.posts.map(post=>(
                            <tr key ={post.id}>
                                <td>{post.id}</td>
                                <td>{post.caption}</td>
                                <td>{post.comment}</td>
                                <td>{post.photo_main}</td>
                                <td>                           
                               <button 
                                onClick={this.props.deletePost.bind
                                (this,post.id)} className="btn btn-danger btn-sm">
                                {" "}Delete</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
     </Fragment>
        );
    }
}
const mapStateToProps= state=>({
    posts:state.posts.posts
});

export default connect(mapStateToProps,{getPosts, deletePost})(Posts);
