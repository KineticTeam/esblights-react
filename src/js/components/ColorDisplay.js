import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function ColorDisplay() {
    const [content, setContent] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const { REACT_APP_ESBAPIKEY } = process.env;
            const response = await fetch(`http://localhost:4000/api/esb-light-data?apikey=${REACT_APP_ESBAPIKEY}`);
            const data = await response.json();
            setContent(data.content);
        };
        fetchData();
    }, []);

    return (
        <div className="cd-comp">
            <h2>Current Color Scheme</h2>
            <div className="color-section">
                <div className={`color-display ${content ? 'fade-in' : ''}`}>
                    {content ? (
                        content.hexCodes.map((color, index) => (
                            <div
                                key={index}
                                className={`color-display-card`}
                                style={{ background: color }}
                            >
                                <h2 className="display-hex-code">{color}</h2>
                            </div>
                        ))
                    ) : (
                        ''
                    )}
                </div>
                <div className={`color-information ${content ? 'fade-in' : ''}`}>
                    <div className={`color-description`}>
                        <h2>{content ? content.colorDescription : ''}</h2>
                        <h3>{content ? content.reason : ''}</h3>
                    </div>
                </div>
            </div>
            <div className="button-section">
                <Link to="/past" className="past-button">
                    View Past Colors
                </Link>
            </div>
        </div>
    );
}

export default ColorDisplay;