import * as React from "react";
import { storiesOf } from "@storybook/react";
import Body from ".";

storiesOf("Body", module).add("default", () => {
	return <Body content="Corona Virus is just a normal virus But  " />;
});
