import React from "react";

import { GlobalStyle } from "./GlobalStyles";
import Main from "./Components/Main";
import AboutComponent from "./Components/AboutComponent";
import ExperienceComponet from "./Components/ExperienceComponet";
import ProjectComponent from "./Components/ProjectsComponent";
import Header from "./Components/Header";

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
            <AboutComponent />
            <ExperienceComponet />
            <ProjectComponent />
        </>
    );
}

export default App;
