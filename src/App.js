import "./App.css";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import SidePane from "./components/SidePane/SidePane";
import TopPane from "./components/TopPane/TopPane";

function App() {
  return (
    <div className="App">
      <Layout>
        <TopPane />
        <SidePane />
        <Main />
      </Layout>
    </div>
  );
}

export default App;
