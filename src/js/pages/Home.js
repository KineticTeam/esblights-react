import ColorDisplay from 'js/components/ColorDisplay';
import JsonDisplay from 'js/components/JsonDisplay';

function Home() {
    const jsonData = {
        content: {
          hexCodes: ['#FFD700', '#000000', '#7FFFD4'],
          xyzCodes: [
            [0.4942, 0.4741, 0.6986],
            [0.01, 0.01, 0.01],
            [0.2134, 0.4035, 0.8078]
          ],
          colorDescription: 'gold, black and aquamarine'
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
                      your own projects, but keep it quiet!</p>
                </div>
                <div><hr /></div>
                <ColorDisplay />
                <div><hr /></div>
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
                      This is the model that is used by Hue Lights, so you'll need to implement these values for those kinds of applications.
                      X and Y values represent the chromaticity coordinates, and Z represents the brightness. Also note that for
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