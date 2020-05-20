import * as React from "react";
import {styled} from "src/theme";
interface BodyProps{
    content:string;
}

const StyledBody = styled.p`
font-size:"16px;
color:${({
    theme:{
        colors:{blue},
    },
}) =>blue};
`;
const Body: React.FC<BodyProps>=({content})=>(
<StyledBody>{content}</StyledBody>
);

export default Body;