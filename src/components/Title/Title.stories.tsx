import * as React from "react";
import {storiesOf} from "@storybook/react";

import Title from "."; 

storiesOf("Title",module).add("Primary",()=>{
return <Title type ="primary" content ="Hello Nepal" />
});

storiesOf("Title",module).add("secondary",()=>{
    return <Title type ="secondary" content ="Contact Us" />
    });  
       