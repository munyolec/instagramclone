import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/posts";
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    photo_main: "",
    caption: ""
  };
  static propTypes = {
    addPost: PropTypes.func.isRequired
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFileChange = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  onSubmit = e => {
    e.preventDefault();
    const { photo_main, caption } = this.state;
    let form_data = new FormData();
    form_data.append('photo_main', photo_main, photo_main.name);
    form_data.append('caption', this.state.caption);
    this.props.addPost(form_data);
    this.setState({
      photo_main: "",
      caption: ""
    });
  };
  render() {
    const { caption, photo_main } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              name="photo_main"
              onChange={this.onFileChange}
            />
          </div>
          <div className="form-group">
            <label>Caption</label>
            <input
              className="form-control"
              type="text"
              name="caption"
              onChange={this.onChange}
              value={caption}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPost })(Form);
