import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    // Get old messages
    const oldMessages = JSON.parse(localStorage.getItem("messages")) || [];

    // New message
    const newMessage = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString()
    };

    // Save
    localStorage.setItem(
      "messages",
      JSON.stringify([...oldMessages, newMessage])
    );

    alert("Message sent successfully!");

    // Reset
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Me</h1>
          <p className="text-muted">Have a question? Send me a message.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-dark w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;