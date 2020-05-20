import * as React from "react";
import { storiesOf } from "@storybook/react";
import Input from ".";

storiesOf("Input", module).add("default", () => {
	const [value, setValue] = React.useState("");         
	return (                            
		<Input 
			name="name"
			type="text"
			value={value}
			placeHolder="Your email address"
			handleChange={({ target: { value } }) => setValue(value)}    
		/>    
	);       
});   
