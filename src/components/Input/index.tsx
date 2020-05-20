import * as React from "react";

import { styled } from "src/theme";

interface InputProps {
	type: "text" | "number" | "password";
	name: string;
	value: string;
	placeHolder: string;
	className?: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
	width: 100%;
`;

const Input: React.FC<InputProps> = ({
	name,
	type,
	value,
	placeHolder,
	className,
	handleChange,
}) => (
	<StyledInput
		type={type}
		name={name}
		value={value}
		placeholder={placeHolder}
		className={className}
		onChange={handleChange}
	/>
);

export default Input;
