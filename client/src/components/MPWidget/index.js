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
      <iframe title="MPWidget" style={styles.widget} frameborder="0" scrolling="no" src="https://www.mountainproject.com/widget?loc=user&x=-10882625&y=3552670&z=10.9&h=550"></iframe>
    </div>
  );
}

export default MPWidget;