'use client';
import { FacephiVideoRecruitmentWidget } from '@facephi/sdk-web-react';
import { Logger, LoggerType } from '../../utils/Logger';

export default function VideoRecluiment() {
	// Video Recruitment Widget Events
	function handleFinishVideo(event: CustomEvent<boolean>) {
		const result = event;
		Logger.printLog(LoggerType.VIDEO_RECRUITMENT, 'FinishVideo', result);
	}

	return <FacephiVideoRecruitmentWidget fullScreen={true} language='es' onFinishVideo={handleFinishVideo} />;
}
