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
                <ColorDisplay />
                <div className="api-info">
                    <h2>ESB Lights API</h2>
                    <h3>Request</h3>
                    <pre className="code-content">GET https://esblight-api.kinetic.com/api/get-light-data</pre>
                    <h3>Response</h3>
                    <JsonDisplay className="code-content" jsonData={jsonData} />
                    <h3>Usage</h3>
                    <p>This API is free to use. You may not use this 
                        API in a manner that exceeds reasonable request 
                        volume, or constitutes excessive or abusive usage.
                        </p>
                </div>
            </div>
        </div>
      );
}

export default Home;