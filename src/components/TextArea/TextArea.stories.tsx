import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from ".";

storiesOf("TextArea", module).add("default", () => {
	const [value, setValue] = React.useState("");
	return (
		<TextArea
			name="name"                                  
			type="text"
			value={value}
			placeHolder="Message..."
			handleChange={({ target: { value } }) => setValue(value)}
		/>
	); 
});
        