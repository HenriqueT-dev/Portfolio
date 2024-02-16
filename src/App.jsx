import React from "react";

import { GlobalStyle } from "./GlobalStyles";
import AboutComponent from "./Components/AboutComponent";
import ExperienceComponet from "./Components/ExperienceComponet";
import ProjectComponent from "./Components/ProjectsComponent";
import PersonalInfos from "./Components/PersonalInfos";

function App() {
    return (
        <>
            <GlobalStyle />
            <PersonalInfos />
            <AboutComponent />
            <ExperienceComponet />
            <ProjectComponent />
        </>
    );
}

export default App;
