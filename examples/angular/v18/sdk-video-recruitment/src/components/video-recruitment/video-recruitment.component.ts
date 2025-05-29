import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Logger, LoggerType } from '../../utils/Logger';

@Component({
	selector: 'app-video-recruitment',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './video-recruitment.component.html',
})
export class VideoRecruitmentComponent {
	// Video Recruitment Widget Events
	handleFinishVideo(event: CustomEvent<boolean>) {
		const result = event;
		Logger.printLog(LoggerType.VIDEO_RECRUITMENT, 'FinishVideo', result);
	}
}
