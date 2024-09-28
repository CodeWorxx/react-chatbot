export interface IChat {
	id: string;
	timestamp: number;
	message: string;
	sender: "bot" | "human";
}
