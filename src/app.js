// @ts-check
import PropTypes from "prop-types";
import React from "react";
import { render } from "react-dom";
import SplitPane from "./components/SplitPane";

function App(props) {
  return (
    <div>
      <SplitPane
        className="splitpane-content"
        vertical={true}
        onResize={() => {}}
      >
        <SplitPane className="splitpane" onResize={() => {}} />
      </SplitPane>
    </div>
  );
}

App.propTypes = {
  hasError: PropTypes.bool,
  showTransformer: PropTypes.bool
};

render(<App />, document.getElementById("container"));
