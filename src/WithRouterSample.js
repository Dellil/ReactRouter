import React from "react";
import { withRouter } from "react-router-dom";

function WithRouterSample({ location, match, history }) {
    return (
        <div>
            <h4>location</h4>
            <textarea
                style={{ width: 300, height: 200 }}
                value={JSON.stringify(location, null, 2)}
                readOnly
            />
            <h4>match</h4>
            <textarea
                style={{ width: 300, height: 200 }}
                value={JSON.stringify(match, null, 2)}
                readOnly
            />
            <button onClick={() => history.push("/")}>zzzzz</button>
        </div>
    );
}

export default withRouter(WithRouterSample);
