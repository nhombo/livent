import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import App from "./app/layout/App";
import "./index.css";
import configureStore from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/ScrollToTop";

const store = configureStore();

const rootElement = document.getElementById("root");
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootElement
  );
};
if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}
render();
