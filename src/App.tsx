import "./App.css";
import DesktopVersion from "./component/DesktopVersion";
import MobileVersion from "./component/MobileVersion";

function App() {
  return (
    <>
      <div className="desktop-version">
        <DesktopVersion />
      </div>

      <div className="mobile-version">
        <MobileVersion />
      </div>
    </>
  );
}

export default App;