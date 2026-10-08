function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h4>MyBlog</h4>
            <p className="text-secondary">
              A personal blog where I share my experience
              in programming, web development and technology.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-secondary text-decoration-none">Home</a></li>
              <li><a href="/blog" className="text-secondary text-decoration-none">Blog</a></li>
              <li><a href="/about" className="text-secondary text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Follow Me</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">Facebook</a>
              <a href="#" className="text-white">GitHub</a>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center text-secondary">
          © 2026 MyBlog. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;