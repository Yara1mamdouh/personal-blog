import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";

function Admin() {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  // Load data
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];

    setPosts(savedPosts);
    setMessages(savedMessages);
  }, []);

  // Add Post
  const addPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  // Delete Post
  const deletePost = (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  // Delete Message
  const deleteMessage = (id) => {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-bold mb-5">Admin Dashboard</h1>

        {/* Add Post */}
        <div className="card border-0 shadow-sm mb-5">
          <div className="card-body p-4">
            <h3 className="mb-4">Add New Post</h3>
            <PostForm addPost={addPost} />
          </div>
        </div>

        {/* Posts */}
        <div className="card border-0 shadow-sm mb-5">
          <div className="card-body">
            <h3 className="mb-4">Posts</h3>

            {posts.length === 0 ? (
              <p className="text-muted">No posts found.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>
                          <span className="badge bg-dark">{post.category}</span>
                        </td>
                        <td>{post.date}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deletePost(post.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h3 className="mb-4">Contact Messages</h3>

            {messages.length === 0 ? (
              <p className="text-muted">No messages found.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((message) => (
                      <tr key={message.id}>
                        <td>{message.name}</td>
                        <td>{message.email}</td>
                        <td>{message.message}</td>
                        <td>{message.date}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteMessage(message.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;