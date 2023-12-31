import { ThemeProvider, styled } from "styled-components";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Video } from "./pages/Video";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Search } from "./pages/Search";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

export const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home type="random" />} />
              {/* fetching random videos in homepage. */}
              <Route path="/trends" element={<Home type="trend" />} />
              {/* fetching most viewed videos first */}
              <Route path="/subscriptions" element={<Home type="sub" />} />
              {/* fetches only the subscribed videos */}
              <Route path="/search" element={<Search />} />
              {/* search functionality, redirect to the searched videos page */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/video/:id" element={<Video />} />
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};
