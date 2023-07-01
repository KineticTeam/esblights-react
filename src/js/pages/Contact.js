function Contact() {


    return (
        <div className="contact-page page-top-padding page-min-height">
            <div class="middle-content">
                <div class="contact-header">
                    <h1>Contact</h1>
                </div>
                <div class="contact-body">
                    <form action={submitForm}>
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <input type="email" id="email" name="email" placeholder="Email Address" required />
                        <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        <textarea type="textarea" id="message" name="message" placeholder="Message" required></textarea>

                        <input type="submit" id="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;