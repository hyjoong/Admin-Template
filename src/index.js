import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <Suspense fallback={() => <p>Loading...</p>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
