import { Form } from "react-router-dom";

function Contact() {
    return (
        <div className="contact-page page-top-padding page-min-height">
            <div className="contact-content">
                <section id="contact">
    
                    <h1 class="section-header">Contact</h1>
                    
                    <div class="contact-wrapper">
                        
                        <form id="contact-form" class="form-horizontal" role="form">
                        
                        <div class="form-group">
                            <div class="col-sm-12">
                            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                            </div>
                        </div>

                        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                        
                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div class="alt-send-button">
                            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                            </div>
                        </button>

                        </form>

                    </div>

                </section>
                  
            </div>
        </div>
    )
}

export default Contact;