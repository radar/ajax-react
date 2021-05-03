import React from "react";
import ReactDOM from "react-dom";
import SimpleComponent from "./Simple"

export default function mount(components = {}) {
  const mountComponents = () => {
    const mountPoints = document.querySelectorAll("[data-react-component]");
    mountPoints.forEach((mountPoint) => {
      const dataset = (mountPoint as HTMLElement).dataset;
      const componentName = dataset["reactComponent"];
      const Component = components[componentName];

      if (Component) {
        const props = JSON.parse(dataset["props"]);
        ReactDOM.render(<Component {...props} />, mountPoint);
      } else {
        console.log(
          "WARNING: No component found for: ",
          dataset.reactComponent,
          components
        );
      }
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    mountComponents();

    const elsContainingReact = document.getElementsByClassName(
      "contains-react"
    );

    Array.from(elsContainingReact).forEach((element) => {
      element.addEventListener("ajax:success", () => {
        console.log("AJAX FINISHED");
      });
    });
  });
}
