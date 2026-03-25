import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger, LoggerType } from '../../utils/Logger';

@Component({
	selector: 'file-uploader-component',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './file-uploader.component.html',
	styleUrl: './file-uploader.component.css',
})
export class FileUploaderComponent {
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	fileUploader = {
		maxFiles: 2,
		maxFileSize: 5,
	};

	handleUploadFinish(event: Event) {
		const result = (event as CustomEvent).detail;
		Logger.printLog(LoggerType.FILE_UPLOADER, event.type, result);
		this.router.navigate(['selphi'], { relativeTo: this.currentRoute.parent });
	}

	handleUploadError(event: CustomEvent) {
		const result = event.detail;
		Logger.printLog(LoggerType.FILE_UPLOADER, 'uploadError', result);
	}
}
