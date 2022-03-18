import React from "react";
import "@lottiefiles/lottie-player";

const Loading = () => {
	return (
		<lottie-player
			autoplay
			loop
			mode="normal"
			src="https://assets1.lottiefiles.com/packages/lf20_szlepvdh.json"
			// style="width: 320px"
		></lottie-player>
	);
};

export default Loading;
