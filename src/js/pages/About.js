function About() {
    return (
        <div className="about page-padding page-min-height">
            <div className="about-content">
                <h1>About</h1>
                <p>
                    This website was created to display the hex code color scheme for the lights
                    on the Empire State Building. The color description that the 
                     <a href="https://esbnyc.com" rel="noreferrer" target="__"> Official Empire State Building </a> 
                    website provides is quite verbose and doesn't actually provide any hex codes.
                </p>
                <p>
                    To address this issue we use the <a href="https://openai.com/blog/openai-api" target="__">OpenAI API</a> to generate a color scheme based on
                    the color description provided by the Empire State Building website.
                </p>
            </div>
        </div>
    )
}

export default About;