import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
		console.log('%c%s', 'color: #FFA500;', '[VIDEO RECRUITMENT] FinishVideo: ', result);
		console.log(event);
	}

	handleUserCancel(event: Event) {
		const result = event;
		console.log('%c%s', 'color: #FFA500;', '[VIDEO RECRUITMENT] UserCancel: ', result);
	}

	handleErrorException(event: any) {
		const result = event;
		console.log('%c%s', 'color: #FFA500;', '[VIDEO RECRUITMENT] ErrorException: ', result);
	}
}
