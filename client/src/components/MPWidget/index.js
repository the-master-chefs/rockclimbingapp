import React from "react";

var styles = {
  widget: {
    width: "100%",
    maxWidth: "1200px",
    height: "550px"
  }
}

function MPWidget() {
  return (
    <div>
      <iframe title="MPWidget" style={styles.widget} frameborder="0" scrolling="no" src="https://www.mountainproject.com/widget?loc=fixed&x=-10879147&y=3540826&z=10.5&h=500"></iframe>
    </div>
  );
}

export default MPWidget;
