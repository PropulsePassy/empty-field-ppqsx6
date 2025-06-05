import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchComponent from "./SearchComponent";
import FormulaireMEP from "./FormulaireCAB";

import App from "./App";
import SplitViewer from "./SplitViewer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FormulaireMEP />
  </StrictMode>
);
