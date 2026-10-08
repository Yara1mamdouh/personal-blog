import { useState } from "react";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import posts from "../data/posts";

function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get categories
  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-5">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">My Blog</h1>
          <p className="text-muted">Articles about programming and technology</p>
        </div>

        {/* Search */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* Categories */}
        <div className="d-flex flex-wrap gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${category === cat ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="row g-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="col-md-4" key={post.id}>
                <BlogCard post={post} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4>No posts found 😔</h4>
              <p className="text-muted">Try another search or category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blog;