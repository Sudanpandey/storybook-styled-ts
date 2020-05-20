import * as React from "react";

import { styled } from "src/theme";

interface ButtonTypes {
	type: "primary" | "secondary" | "tertiary" | "fourth";
}

interface ButtonProps extends ButtonTypes {
	buttonText: string;
	className?: string;

	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledButton = styled.button<ButtonTypes>`
	color: ${({
		theme: {
			colors: { primary, secondary, tertiary, fourth },
		},
		type,
	}) =>
		type === "primary"
			? primary
			: type === "secondary"
			? secondary
			: type === "tertiary"
			? tertiary
			: fourth};
	padding: 5px 7px;
	border-radius: 5px;
	cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({
	onClick,
	type,
	buttonText,
	className,
}) => (
	<StyledButton onClick={onClick} type={type} className={className}>
		{buttonText}
	</StyledButton>
);

export default Button;
