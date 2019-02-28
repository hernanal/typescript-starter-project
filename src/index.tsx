import { EnthusiasmAction } from "actions/index";
import Hello from "containers/Hello";
import "index.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { enthusiasm } from "reducers/index";
import { createStore } from "redux";
import { IStoreState } from "types/index";

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
