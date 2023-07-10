import React, { useEffect, useState } from 'react';

function ColorDisplay() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { REACT_APP_ESBAPIKEY } = process.env;
                const response = await fetch(`https://esblights.kinetic.com/api/esb-light-data?apikey=${REACT_APP_ESBAPIKEY}`);
                const data = await response.json();
                setContent(data.content);
            } catch (error) {}
        };
        fetchData();
    }, []);

    return (
        <div className="color-section">
            <div className="color-display">
                {content ? (content.hexCodes.map((color, index) => (
                    <div key={index} className="color-display-card" style={{ background: color }}>
                        <h2 className="display-hex-code">{color}</h2>
                    </div>
                ))) : (
                    ""
                )}
            </div>
            <div className="color-information">
                <div className="color-description">
                    <h2>{content ? content.colorDescription : "..."}</h2>
                    {/* <h3>{content ? "Hex Codes Array:" : ""}</h3>
                    <code>{content ? JSON.stringify(content.hexCodes) : ""}</code>
                    <h3>{content ? "XYZ Color Space Array:" : ""}</h3>
                    <code>{content ? JSON.stringify(content.xyzCodes) : ""}</code> */}
                </div>
            </div>
        </div> 
    );
} 

export default ColorDisplay;