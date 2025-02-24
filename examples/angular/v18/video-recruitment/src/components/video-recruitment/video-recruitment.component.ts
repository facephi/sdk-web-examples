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
	onFinishVideo(event: CustomEvent<boolean>) {
		console.log('%c%s', 'color: orange;', `[VIDEO RECRUITMENT] EmitError: ${event.detail}`);
	}

	onUserCancel(event: Event) {
		console.log('%c%s', 'color: orange;', `[VIDEO RECRUITMENT] EmitError: ${event}`);
	}
}
