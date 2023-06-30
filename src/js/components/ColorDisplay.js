import React, { useEffect, useState } from 'react';

function ColorDisplay() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://thawing-depths-53334-e979c81783da.herokuapp.com:4000/api/esb-color-info');
                const data = await response.json();
                console.log(data);
                setContent(data.content);
            } catch (error) {
                console.log('Error:', error);
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