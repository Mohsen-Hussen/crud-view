import React from "react";
import "@lottiefiles/lottie-player";

const Loading = () => {
	return (
		<lottie-player
			autoplay
			loop
			mode="normal"
			src="https://assets5.lottiefiles.com/packages/lf20_szlepvdh.json"
			style={{ height: "50vh" }}
		></lottie-player>
	);
};

export default Loading;
