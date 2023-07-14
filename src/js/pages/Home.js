import { useEffect, useRef } from 'react';
import ColorDisplay from 'js/components/ColorDisplay';
import JsonDisplay from 'js/components/JsonDisplay';

function Home() {    
    const apiSection = useRef(null);

    useEffect(() => {
        const handleHashChange = () => {
          if (window.location.hash === '#esb-lights-api') {
            // Scroll to the section on page load
            apiSection.current.scrollIntoView({ behavior: 'smooth' });
          }
        };
  
        // Scroll to the section if the hash is already present
        handleHashChange();
  
        // Listen for hash changes and scroll to the section accordingly
        window.addEventListener('hashchange', handleHashChange);
  
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);
  

    const jsonData = {
        content: {
            hexCodes: ["#0000FF", "#FFFFFF", "#FF0000"],
            xyzCodes: [
                [0.1355, 0.0399, 0.0722],
                [0.3227, 0.329, 1],
                [0.7006, 0.2993, 0.2127]
            ],
            colorDescription: "blue, white and red",
            reason: "In Partnership with The Consulate General of France in New York in Celebration of Bastille Day"
        }
    };

    return (
        <div className="home page-padding page-min-height">
            <div className="content">
                <div className="api-info">
                    <h2>ESB Lights at Kinetic</h2>
                    <p>This API was created to allow us to match 
                        our <a href="https://kinetic.com/virtual-tour/" target="__">weathervane lights</a> with 
                        the lights on the Empire State Building. Feel free to use it for
                        your own projects, but keep it quiet!
                    </p>
                </div>
                <div className="divider"><hr/></div>
                <ColorDisplay />
                <div id="esb-lights-api" className="divider" ref={apiSection}><hr/></div>
                <div className="api-info">
                    <h2>ESB Lights API</h2>
                    <h3>Request</h3>
                    <pre className="code-content">GET https://esblight-api.kinetic.com/api/esb-light-data</pre>
                    <h3>Response</h3>
                    <JsonDisplay className="code-content" jsonData={jsonData} />
                    <div><hr /></div>
                    <h3>A Few Notes</h3>
                    <p>The values in the xyzCodes attribute belong to a special color model
                        called the <a href="https://en.wikipedia.org/wiki/CIE_1931_color_space">CIE 1931 Color Space</a>.
                        This is the model that is used by Hue Lights, so you'll need to implement these values for those kinds of systems.
                        X and Y values represent the chromaticity diagram coordinates, and Z represents the brightness. Also note that for
                        Hue Light systems, the brightness value is an integer in the range of 0-254, so you will need to multiply the value.
                    </p>
                    <div><hr/></div>
                    <h3>Usage</h3>
                    <p>This API is free to use. Please do not use this 
                        API in a manner that exceeds reasonable request 
                        volume, or constitutes excessive or abusive usage.</p>
                </div>
            </div>
        </div>
      );
}

export default Home;