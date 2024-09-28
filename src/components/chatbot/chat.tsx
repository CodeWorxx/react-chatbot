import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { nanoid } from "nanoid";
import { IChat } from "../../types/chat";

const Chat = () => {
	const [chat, setChat] = useState("");
	const [chats, setChats] = useState<IChat[]>([]);

	const handleChatSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const payload: IChat = {
			id: nanoid(),
			timestamp: new Date().getTime(),
			message: chat,
			sender: "human",
		};
		setChats((prev) => [...prev, payload]);
		setChat("");
	};

	return (
		<div className="bg-gray-100">
			<div className="flex flex-col">
				<div className="flex flex-col p-5 h-[30rem]">
					{chats.map((chat) => {
						return (
							<div
								key={chat.id}
								className="self-end px-5 py-2 my-1 text-white bg-blue-500 rounded-lg w-fit"
							>
								{chat.message}
							</div>
						);
					})}
				</div>

				<form className="flex py-1 pr-2 bg-white" onSubmit={handleChatSubmit}>
					<input
						type="text"
						className="w-full px-4 py-2 text-base outline-none"
						placeholder="Type your message here..."
						onChange={(e) => setChat(e.target.value)}
						value={chat}
					/>
					<button>
						<IoMdSend size="28" color="gray" />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Chat;
