import React, { useEffect, useState } from 'react';

function ColorDisplay() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/esb-hex-codes');
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
                {content ? (content.map((color, index) => (
                    <div key={index} className="color-display-card" style={{ background: color }}>
                        <p className="display-hex-code">{color}</p>
                    </div>
                ))) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="color-information">
                <div className="">

                </div>
            </div>
        </div>
    );
}

export default ColorDisplay;