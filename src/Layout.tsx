import * as React from "react";
import ExampleComponent from "./components/ExampleComponent";
import { ExamplePage } from "./pages/ExamplePage";

// stateless component!
const Layout = () => {
  return (
    <div>
      <ExamplePage>
        <ExampleComponent />
      </ExamplePage>
    </div>
  );
};

export default Layout;
