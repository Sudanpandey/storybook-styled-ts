import * as React from "react";

import { styled } from "src/theme";

interface TitleTypes {
	type: "primary" | "secondary";
}

interface TitleProps extends TitleTypes {
	content: string;
}

const StyledTitle = styled.h1<TitleTypes>`
	font-size: ${({ type }) => (["primary"].includes(type) ? "24px" : "20px")};
	color: ${({
		type,
		theme: {
			colors: { blue, white },
		},
	}) => (type === "primary" ? blue : white)};
`;

const Title: React.FC<TitleProps> = ({ type, content }) => (
	<StyledTitle type={type}>{content}</StyledTitle>
);

export default Title;
