/**
 * Facephi VideoID Component Configuration Example
 *
 * WARNING:
 * This is an example of the implementation of the Web SDK Library.
 * All the properties, events and methods used in this examples are implemented as orientation to a better performance in coding.
 *
 * Please, consider to check the documentation before editing the code.
 *
 * We recommend to remove all the console logs and use actual code.
 *
 */

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Logger, LoggerType } from '../../utils/Logger';

declare const process: { env: { [key: string]: string } };

@Component({
	selector: 'video-id-component',
	templateUrl: './video-id.component.html',
	styleUrls: ['./video-id.component.css'],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VideoIDComponent {
	constructor(private route: Router) {}

	// VideoID Component configuration
	operationId = uuidv4();
	customerId = 'example@email.com';
	tenantId = process.env['NG_APP_TENANT_ID'];
	videoRecordingUrl = process.env['NG_APP_VIDEORECORDING_URL'];
	apiKey = process.env['NG_APP_APIKEY'];
	license = process.env['NG_APP_LICENSE'];
	language = "en";

	// VideoID Component event handlers
	onExtractionFinish(event: any) {
		Logger.printLog(LoggerType.VIDEOID, 'ExtractionFinish', event);
		this.route.navigate(['finish']);
	}

	onUserCancel() {
		Logger.printLog(LoggerType.VIDEOID, 'UserCancel', '');
	}

	onExtractionTimeout() {
		Logger.printLog(LoggerType.VIDEOID, 'ExtractionTimeout', '');
	}

	onExceptionCaptured() {
		Logger.printLog(LoggerType.VIDEOID, 'ExceptionCaptured', '');
	}
}
