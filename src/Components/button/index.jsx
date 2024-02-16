import React from "react";
import { StyledButton } from "./styles";

import PropTypes from "prop-types";

export default function Button({ children }){
    return(
        <StyledButton>
            {children}
        </StyledButton>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
};