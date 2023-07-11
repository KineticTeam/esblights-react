function Contact() {
    function submitForm(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const url = 'https://script.google.com/macros/s/AKfycbxEUZQVW6ZJ0q6U5hF0sYV2qQ4n5r6Qx5d2hQq4/exec';
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        }).then((response) => {
            if (response.status === 200) {
                alert('Message sent successfully!');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('subject').value = '';
                document.getElementById('message').value = '';
            } else {
                alert('Message failed to send.');
            }
        })
    }

    return (
        <div className="contact-page page-padding page-min-height justify-center">
            <div className="middle-content">
                <div className="contact-body">
                    <form onSubmit={submitForm}>
                        <h2>Contact</h2>
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        <textarea type="textarea" id="message" name="message" placeholder="Message" required></textarea>

                        <input type="submit" id="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
