import { StyledApp } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { themes } from "./Styles/styles";
import { Suspense, useContext, useState } from "react";
import AppContext, { AppContextProvider } from "./Context";
import DiscoverPanel from "./Components/Organisms/DiscoverPanel/DiscoverPanel";
import Text from "./Components/Atoms/Text/Text";
import ToggleButton from "./Components/Atoms/RadioButton/ToggleButton";

const dummyData = [
  {
    i: {
      height: 160,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZTA2ODdjMDItYzNmNC00ZjY4LTkzOGYtNjdmYTJjZGFlMGZjXkEyXkFqcGdeQXVyNzg5ODk3MTk@.jpg",
      width: 160,
    },
    id: "/toronto",
    l: "Toronto International Film Festival",
    s: "IMDb Coverage of the Toronto International Film Festival",
  },
  {
    i: {
      height: 1500,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      width: 1102,
    },
    id: "tt0944947",
    l: "Game of Thrones",
    q: "TV series",
    qid: "tvSeries",
    rank: 5,
    s: "Emilia Clarke, Peter Dinklage",
    y: 2011,
    yr: "2011-2019",
  },
  {
    i: {
      height: 500,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYTM3N2ZiZTgtYjlhOC00NGI2LTk5MWItNDBiOGVhZmNhMzZkXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg",
      width: 500,
    },
    id: "tt13380510",
    l: "Game of Thrones",
    q: "video",
    qid: "video",
    rank: 1261,
    s: "Roy Dotrice",
    y: 2003,
  },
  {
    i: {
      height: 1000,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjEyZTdhNDMtMWFkMS00ZmRjLWEyNmEtZDU3MWFkNDEzMDYwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
      width: 666,
    },
    id: "tt0091605",
    l: "The Name of the Rose",
    q: "feature",
    qid: "movie",
    rank: 4483,
    s: "Sean Connery, Christian Slater",
    y: 1986,
  },
];

const PanelContainer = () => {
  // const { state } = useContext(AppContext);

  return <DiscoverPanel data={dummyData} />;
  // return <DiscoverPanel data={state.data.read()} />;
};

function App() {
  const [activeTheme, setActiveTheme] = useState("dark");

  return (
    <AppContextProvider>
      <ThemeProvider theme={themes[activeTheme]}>
        <StyledApp>
          <ToggleButton
            isActive={activeTheme === "dark"}
            offTitle="light"
            onTitle="dark"
            onClick={() =>
              setActiveTheme((state) => (state === "dark" ? "light" : "dark"))
            }
          />
          <Suspense
            fallback={
              <div className="loading">
                <Text size="xl">Loading...</Text>
              </div>
            }
          >
            <PanelContainer />
          </Suspense>
        </StyledApp>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
