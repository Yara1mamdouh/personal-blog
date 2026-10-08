import { useState } from "react";

function PostForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !image || !description || !content) {
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      category,
      image,
      description,
      content,
      date: new Date().toLocaleDateString()
    };

    addPost(newPost);

    setTitle("");
    setCategory("");
    setImage("");
    setDescription("");
    setContent("");

    alert("Post Added Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
        />
      </div>

      {/* Category */}
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
          <option value="Programming">Programming</option>
        </select>
      </div>

      {/* Image */}
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="text"
          className="form-control"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Short Description</label>
        <textarea
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write short description..."
        />
      </div>

      {/* Content */}
      <div className="mb-3">
        <label className="form-label">Post Content</label>
        <textarea
          className="form-control"
          rows="7"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
        />
      </div>

      <button type="submit" className="btn btn-dark">
        Add Post
      </button>
    </form>
  );
}

export default PostForm;