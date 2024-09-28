import React from "react";

const Footer = () => {
	return (
		<footer className="flex items-center justify-center py-3 border-t bg-gray-50">
			<h6 className="text-xs">
				Powered by{" "}
				<a
					href="https://codeworx.co.in"
					target="_blank"
					className="text-blue-500"
				>
					CodeWorx
				</a>
			</h6>
		</footer>
	);
};

export default Footer;
