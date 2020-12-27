import React, { Fragment } from 'react';
import "../css/Loader.scss";

function Loader(props) {

    return (
        <Fragment>
            <div>
                {
                    props.isLoading
                        ?
                        <div className="page-transition page-transition-entering">
                            <div className="page-transition-bg"> </div>
                            <div className="page-transition-icon">
                                <img src={"https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/master/src/images/500%20x%20500%20logo.png"} alt="Loader Icon" />
                            </div>
                        </div>
                        :
                        <div className="page-transition page-transition-entered">
                            <div className="page-transition-bg"> </div>
                            <div className="page-transition-icon">
                                <img src={"https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/master/src/images/500%20x%20500%20logo.png"} alt="Loader Icon" />
                            </div>
                        </div>
                }
            </div>
        </Fragment>
    )
}

export default Loader;