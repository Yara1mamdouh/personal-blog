import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import posts from "../data/posts";

function Home() {
  // Get latest 3 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <span className="badge bg-light text-dark mb-3">
                Welcome to my blog
              </span>

              <h1 className="display-4 fw-bold">Hi, I'm Yara 👋</h1>

              <p className="lead text-secondary">
                I'm a Web Developer who loves React,
                JavaScript and building modern websites.
              </p>

              <Link to="/blog" className="btn btn-light btn-lg mt-3">
                Explore My Blog
              </Link>
            </div>

            <div className="col-md-5 text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Developer"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold">Latest Posts</h2>
              <p className="text-muted">Check out my latest articles</p>
            </div>
            <Link to="/blog" className="btn btn-outline-dark">
              View All
            </Link>
          </div>

          <div className="row g-4">
            {latestPosts.map((post) => (
              <div className="col-md-4" key={post.id}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">About Me</h2>
              <p className="text-muted">
                I'm a passionate developer interested in
                creating modern web applications using
                React, JavaScript and other technologies.
              </p>
              <Link to="/about" className="btn btn-dark">
                Learn More
              </Link>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <div className="display-1">💻</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;