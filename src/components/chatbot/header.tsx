import React from "react";
import { IoMdClose } from "react-icons/io";

interface IProps {
	onClose: () => void;
}

const Header = (props: IProps) => {
	return (
		<div className="p-5">
			<div className="flex items-center justify-between">
				<h3>Chatbot</h3>

				<button onClick={props.onClose}>
					<IoMdClose size="24" />
				</button>
			</div>
		</div>
	);
};

export default Header;
