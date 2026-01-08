import './Contact.css'

function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-header text-center">
                    <p className="section-tagline">Contact</p>
                    <h2 className="section-title">Let's Work Together</h2>
                    <div className="divider divider-center"></div>
                    <p className="contact-intro">
                        Have a project in mind? I'd love to hear from you.
                        Let's create something extraordinary together.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3 className="contact-item-title">Email</h3>
                            <a href="mailto:erickpassosdias@gmail.com" className="contact-item-link">
                                erickpassosdias@gmail.com
                            </a>
                        </div>
                        <div className="contact-item">
                            <h3 className="contact-item-title">Location</h3>
                            <p className="contact-item-text">Sao Paulo, SP</p>
                        </div>
                        <div className="contact-item">
                            <h3 className="contact-item-title">Social</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/erickpdias/" className="social-link">LinkedIn</a>
                                <a href="https://github.com/ErickGods" className="social-link">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" className="form-input" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" className="form-input" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" className="form-textarea" rows="5" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
