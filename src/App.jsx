import React from "react";
import Header from "./Components/Header";
import { GlobalStyle } from "./GlobalStyles";
import Main from "./Components/Main";
import AboutComponent from "./Components/AboutComponent";
import ExperienceComponet from "./Components/ExperienceComponet";
import ProjectComponent from "./Components/ProjectsComponent";

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
