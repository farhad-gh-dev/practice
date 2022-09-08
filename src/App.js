import "./App.css";
import { Suspense, useContext } from "react";
import AppContext, { AppContextProvider } from "./Context";
import DiscoverPanel from "./Components/Organisms/DiscoverPanel/DiscoverPanel";
import Text from "./Components/Atoms/Text/Text";

const PanelContainer = () => {
  const { state } = useContext(AppContext);

  return <DiscoverPanel data={state.data.read()} />;
};

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Suspense
          fallback={
            <div className="loading">
              <Text size="xl">Loading...</Text>
            </div>
          }
        >
          <PanelContainer />
        </Suspense>
      </div>
    </AppContextProvider>
  );
}

export default App;
