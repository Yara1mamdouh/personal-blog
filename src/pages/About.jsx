function About() {
    const skills = [
        { name: "HTML", desc: "Web Structure" },
        { name: "CSS", desc: "Web Design" },
        { name: "JavaScript", desc: "Programming" },
        { name: "React", desc: "Frontend Development" },
        { name: "Angular", desc: "Frontend Development" }

    ];

    return (
        <section className="py-5">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold">About Me</h1>
                    <p className="text-muted">Get to know me better</p>
                </div>

                {/* About */}
                <div className="row align-items-center">
                    <div className="col-md-5 text-center">
                        <img
                            src="https://nafezly-production.fra1.cdn.digitaloceanspaces.com/uploads/avatars/317707_1787835992_6a903658da386.webp"
                            alt="Profile"
                            className="img-fluid rounded-circle shadow"
                            style={{ width: "300px", height: "300px", objectFit: "cover" }}
                        />
                    </div>

                    <div className="col-md-7 mt-4 mt-md-0">
                        <h2 className="fw-bold">Hello! I'm Yara</h2>
                        <p className="text-muted">
                            I'm a passionate Web Developer who enjoys
                            building websites and web applications.
                        </p>
                        <p className="text-muted">
                            I started my programming journey with HTML,
                            CSS and JavaScript, and then moved into
                            modern technologies like React.
                        </p>
                        <p className="text-muted">
                            In this blog, I share what I learn,
                            useful tutorials, programming tips and
                            my personal experiences.
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-5">
                    <h2 className="fw-bold text-center mb-4">My Skills</h2>

                    <div className="row g-4">
                        {skills.map((skill) => (
                            <div className="col-md-3" key={skill.name}>
                                <div className="card border-0 shadow-sm text-center p-4">
                                    <h4>{skill.name}</h4>
                                    <p className="text-muted mb-0">{skill.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;