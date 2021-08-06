import React, {Component} from "react";
import Layout from './components/Layout/Layout';
import CakeBuilder from "./containers/CakeBuilder/CakeBuilder";

function App() {
  return (
    <div>
      <Layout>
        <CakeBuilder/>
      </Layout>
    </div>
  );
}

export default App;
