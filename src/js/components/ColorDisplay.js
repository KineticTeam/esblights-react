import React, { useEffect, useState } from 'react';

function ColorDisplay() {
    const [content, setContent] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const { REACT_APP_ESBAPIKEY } = process.env;
            const response = await fetch(`https://esblight-api.kinetic.com/api/esb-light-data?apikey=${REACT_APP_ESBAPIKEY}`);
            const data = await response.json();
            setContent(data.content);
        };
        fetchData();
    }, []);

    return (
        <div className="cd-comp">
            <h2>Current Color Scheme</h2>

            <div className="color-section">
                <div className="color-display">
                    {content ? (
                        content.hexCodes.map((color, index) => (
                            <div
                                key={index}
                                className={`color-display-card ${content ? 'fade-in' : ''}`}
                                style={{ background: color }}
                            >
                                <h2 className="display-hex-code">{color}</h2>
                            </div>
                        ))
                    ) : (
                        ''
                    )}
                </div>
                <div className="color-information">
                    <div className="color-description">
                        <h2>{content ? content.colorDescription : '...'}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorDisplay;
