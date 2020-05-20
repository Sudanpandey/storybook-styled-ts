import * as React from "react";
import { storiesOf } from "@storybook/react";

import ListItem from ".";

storiesOf("ListItem", module).add("default", () => {
	return <ListItem items= { ["Item1","Item2","Item3","Item4","Item5","Item6" ]} />;
});
