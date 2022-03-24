import "./App.css";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Metadata from "./components/Metadata/Metadata";
import SidePane from "./components/SidePane/SidePane";
import TopPane from "./components/TopPane/TopPane";

function App() {
  return (
    <div className="App">
      <Metadata />
      <Layout>
        <TopPane />
        <SidePane />
        <Main />
      </Layout>
    </div>
  );
}

export default App;
