import React, { FC } from "react";

import { styled } from "src/theme";

const Wrapper = styled.div`
	display: flex !important;
	justify-content: space-between !important;
`;
const Item = styled.div`
	background-color: red;
`;

const Header: FC = () => {
	return (
		<Wrapper>
			<Item>Hello</Item>
			<Item>Hello</Item>
			<Item>Hello</Item>
		</Wrapper>
	);
};

export default Header;
