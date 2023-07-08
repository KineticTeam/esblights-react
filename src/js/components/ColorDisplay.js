import React, { useEffect, useState } from 'react';

function ColorDisplay() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { REACT_APP_ESBAPIKEY } = process.env;
                const response = await fetch(`http://esblight-api.uvtywtylvd-zqy3jy2wn3kg.p.temp-site.link/api/esb-light-data?apikey=${REACT_APP_ESBAPIKEY}`);
                const data = await response.json();
                setContent(data.content);
            } catch (error) {
                // console.log('Error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="color-section">
            <div className="color-display">
                {content ? (content[0].map((color, index) => (
                    <div key={index} className="color-display-card" style={{ background: color }}>
                        <h2 className="display-hex-code">{color}</h2>
                    </div>
                ))) : (
                    ""
                )}
            </div>
            <div className="color-information">
                <div className="color-description">
                    <h2>{content ? content[1] : "..."}</h2>
                    <h3>{content ? content[0].toString() : ""}</h3>
                </div>
            </div>
        </div>
    );
} 

export default ColorDisplay;