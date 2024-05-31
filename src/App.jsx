import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex flex-col w-3/12 ml-auto">
        <TopNav />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
