import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";

storiesOf("Button", module).add("primary", () => {
	return <Button buttonText="Sign Up" type="primary" onClick={() => {}} />;
});

storiesOf("Button", module).add("secondary", () => {
	return <Button buttonText="Sign In" type="secondary" onClick={() => {}} />;
});




