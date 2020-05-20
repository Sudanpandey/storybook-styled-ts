import * as React from "react";

import { styled } from "src/theme";

interface TextAreaProps {
	type: "text" | "number";
	name: string;
	value: string;
	placeHolder: string;
	className?: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledTextArea = styled.textarea`
	border-radius: 5px;
	width: 100%;
	height: 100px;
`;

const TextArea: React.FC<TextAreaProps> = ({
	name,
	type,
	value,
	placeHolder,
	className,
	handleChange,
}) => (
	<StyledTextArea
		type={type}
		name={name}
		value={value}
		placeholder={placeHolder}
		className={className}
		onChange={handleChange}
	/>
);

export default TextArea;
