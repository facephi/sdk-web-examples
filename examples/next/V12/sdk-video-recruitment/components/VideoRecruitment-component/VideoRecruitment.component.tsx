'use client';
import { FacephiVideoRecruitmentWidget } from '@facephi/sdk-web-react';

export default function VideoRecluiment() {
	// Video Recruitment Widget Events
	function handleFinishVideo(event: CustomEvent<boolean>) {
		const result = event;
		console.log('%c%s', 'color: #FFA500;', '[VIDEO RECRUITMENT] FinishVideo: ', result);
	}

	function handleUserCancel(event: Event) {
		const result = event;
		console.log('%c%s', 'color: #FFA500;', '[VIDEO RECRUITMENT] UserCancel: ', result);
	}

	function handleErrorException(event: any) {
		const result = event;
		console.log('%c%s', 'color: #FFA500;', '[VIDEO RECRUITMENT] ErrorException: ', result);
	}

	return (
		<FacephiVideoRecruitmentWidget
			fullScreen={true}
			language='es'
			onFinishVideo={handleFinishVideo}
			onUserCancel={handleUserCancel}
			onErrorException={handleErrorException}
		/>
	);
}
