import * as React from "react";

import { styled } from "src/theme";

interface ListItemProps {
	items: string[];
}

const StyledUnorderedList = styled.ul``;
const StyledList = styled.li`
	color: ${({
		theme: {
			colors: {blue },
		},
	}) => blue};
`;

const Title: React.FC<ListItemProps> = ({ items }) => (
	<StyledUnorderedList>
		{items.map((abc) => {
			return <StyledList key={items}>{abc}</StyledList>;
		})}
	</StyledUnorderedList>
);

export default Title;
