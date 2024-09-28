import React, { useState } from "react";
// import Logo from "@/assets/logo.png";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Header from "./header";
import Footer from "./footer";
import Chat from "./chat";

const Chatbot = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className="fixed bottom-5 right-5">
			{!isOpen ? (
				<div
					className="p-3 transition-colors bg-blue-600 rounded-full cursor-pointer hover:bg-blue-500"
					onClick={handleOpen}
				>
					<IconContext.Provider value={{ className: "", size: "40px" }}>
						<IoChatboxEllipsesOutline color="white" height={100} width={100} />
					</IconContext.Provider>
				</div>
			) : (
				<div
					id="chatbot"
					className="absolute bottom-0 right-0 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[25rem]  rounded-lg flex flex-col"
				>
					<Header onClose={handleClose} />
					<Chat />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Chatbot;
