import React, { useState, useEffect } from "react";

function PastColorDisplay() {
    const [content, setContent] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const { REACT_APP_ESBAPIKEY } = process.env;
            const response = await fetch(`https://esblight-api.kinetic.com/api/past-esb-light-data?apikey=${REACT_APP_ESBAPIKEY}`);
            const data = await response.json();
            setContent(data.content);
        };
        fetchData();
    }, []);


    return (
        <div className={`past-color-display-section ${content ? 'fade-in' : ''}`}>
            {content ? (
                content.colorMap.map((color) => {
                    return (
                        <div className="past-color-card">
                            <div className="past-colors">
                                {color.hexCodesArray.map((color, index) => {
                                    return (
                                        <div className="past-color" key={index} style={{ backgroundColor: color }}>
                                            <div className="past-color-hex-code">
                                                {color}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="past-color-info">
                                <div className="description">
                                    {color.color}
                                </div>
                                <div className="reason">
                                    {color.reason}
                                </div>
                                <div className="dates">
                                    <div className="dates">
                                        <br />
                                        Last Appearance:
                                    </div>
                                    <div className="dates">
                                        {color.dates[color.dates.length - 1]}
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })
            ) : ''}
        </div>
    );
}

export default PastColorDisplay;
