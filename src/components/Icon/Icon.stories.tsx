import * as React from "react";
import { storiesOf } from "@storybook/react";

import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import Icon from ".";

storiesOf("Icon", module).add("Facebook", () => {
	return <Icon icon={faFacebookSquare} color="green" />;
});

storiesOf("Icon", module).add("Instagram", () => {
	return <Icon icon={faInstagramSquare} color="green" />;
});

storiesOf("Icon", module).add("Twitter", () => {
	return <Icon icon={faTwitterSquare} color="green" />;
});

storiesOf("Icon", module).add("Youtube", () => {
	return <Icon icon={faYoutubeSquare} color="green" />;
});
