/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>            
            <script src={withPrefix('assets/js/plugins.js')}/>
            <script src={withPrefix('assets/js/main.js')}/>
            <script src={withPrefix('assets/js/page-load.js')}/>
            <script src={withPrefix('assets/js/page-unload.js')}/>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>        
        </React.Fragment>
    ]);

};
