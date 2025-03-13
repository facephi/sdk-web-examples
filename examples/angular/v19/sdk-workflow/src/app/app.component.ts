/**
 * Facephi SDK Provider Configuration Example
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
import { Language, TypeFamily, type WorkflowEvent, WorkflowEventType, Widgets } from '@facephi/sdk-web-wc';
import { Language as SelphiLanguage } from '@facephi/selphi-web-component';
import { Language as SelphIDLanguage } from '@facephi/selphid-web-component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html',
})
export class AppComponent {
	// Workflow IDs (Replace ids in workflow to change order/widgets)
	idStart = 'd9c69588-0176-472f-9b79-516ad379a07b';
	idSelphi = 'be730043-2dd6-4db5-a32c-80a18b3a2871';
	idSelphID = 'b4f97888-8cfe-45fd-b70f-8dded15941e8';
	idFinish = '1abab5bd-e656-4785-bd27-99efdd2483e3';

	// Provider data
	provider = {
		apiKey: import.meta.env.NG_APP_API_KEY, // Required license
		steps: 'START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH', // Order in platform
		type: TypeFamily.onboarding, // onboarding or authentication
		customerId: 'facephi-sdk-workflow-angular19-example', // Unique user id
		language: Language.es, // Main language in sdk and widgets
		waitRequest: true, // Workflow resolves all pending requests before changing the widget
		workflow: [
			// START
			{
				id: this.idStart,
				data: {
					label: null,
					widgetId: '6152fab3c01f0c1eb6deedd1',
					draggable: false,
					widgetName: 'START',
					initialNode: true,
					configuration: {},
				},
				type: 'ActionNode',
				position: {
					x: 96,
					y: 213.5,
				},
				sourcePosition: 'right',
				targetPosition: 'left',
			},
			{
				id: `reactflow__edge-${this.idStart}null-${this.idSelphID}null`,
				source: this.idStart,
				target: this.idSelphID,
				sourceHandle: null,
				targetHandle: null,
				arrowHeadType: 'arrowclosed',
			},
			// SELPHID
			{
				id: this.idSelphID,
				data: {
					label: null,
					widgetId: '6152ccefc01f0c1eb6deedb8',
					draggable: true,
					widgetName: 'SELPHID_WIDGET',
					configuration: {
						general: {
							//SelphID Widget Config
							country: 'ES',
							language: SelphIDLanguage.ES,
							previewCapture: true,
							captureTimeout: 10,
							captureRetries: 3,
							showLog: false,
						},
					},
				},
				position: {
					x: 670,
					y: 205,
				},
				sourcePosition: 'right',
				targetPosition: 'left',
			},
			{
				id: `reactflow__edge-${this.idSelphID}null-${this.idSelphi}null`,
				source: this.idSelphID,
				target: this.idSelphi,
				sourceHandle: null,
				targetHandle: null,
				arrowHeadType: 'arrowclosed',
			},
			// SELPHI
			{
				id: this.idSelphi,
				data: {
					label: null,
					widgetId: '6152cce0c01f0c1eb6deedb7',
					draggable: true,
					widgetName: 'SELPHI_WIDGET',
					configuration: {
						general: {
							//Selphi Widget Config
							stabilizationStage: true,
							language: SelphiLanguage.ES,
							interactible: true,
							previewCapture: true,
							timeout: 30000,
							showLog: false,
						},
					},
				},
				position: {
					x: 1023.9999999999999,
					y: 203,
				},
				sourcePosition: 'right',
				targetPosition: 'left',
			},
			{
				id: `reactflow__edge-${this.idSelphi}null-${this.idFinish}null`,
				source: this.idSelphi,
				target: this.idFinish,
				sourceHandle: null,
				targetHandle: null,
				arrowHeadType: 'arrowclosed',
			},
			// FINISH
			{
				id: this.idFinish,
				data: {
					label: null,
					widgetId: '6152fafec01f0c1eb6deedd3',
					draggable: true,
					widgetName: 'FINISH',
					configuration: {},
				},
				type: 'ActionNode',
				position: {
					x: 1380,
					y: 211,
				},
				sourcePosition: 'right',
				targetPosition: 'left',
			},
		],
	};

	// Provider Events
	onEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		console.log(
			'%c%s%s\n%s\n%s\n%s',
			'color: #00FF00;',
			'[PROVIDER] onEmitData:',
			'',
			`operationId: ${result.operationId}`,
			`sessionId: ${result.sessionId}`,
			`extraData: ${result.extraData}`,
		);
	}

	onEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		console.log(
			'%c%s%s\n%s',
			'color: #00FF00;',
			'[PROVIDER] onEmitError:',
			'',
			`statusCode: ${result.statusCode}`,
			`message: ${result.message}`,
		);
	}

	onEmitWorkflowEvent(event: CustomEvent<WorkflowEvent>) {
		const result = event.detail;
		switch (result.type) {
			case WorkflowEventType.start:
				console.log('%c%s', 'color: #00CC66;', '[WORKFLOW] start: ', result);
				break;
			case WorkflowEventType.cancel:
				console.log('%c%s', 'color: #00CC66;', '[WORKFLOW] userCancel: ', result.data);
				break;
			case WorkflowEventType.finish:
				console.log('%c%s', 'color: #00CC66;', '[WORKFLOW] finish: ', result);
				break;
			case WorkflowEventType.changeStep:
				if (result.data?.widget) {
					const widget = result.data.widget;
					if (widget.data.widgetId === Widgets.selphi) {
						// SELPHI
						console.log('%c%s', 'color: #00CC66;', '[WORKFLOW] changeStep: ', widget);
					} else if (widget.data.widgetId === Widgets.selphid) {
						// SELPHID
						console.log('%c%s', 'color: #00CC66;', '[WORKFLOW] changeStep: ', widget);
					}
				}
				break;
			case WorkflowEventType.selphiCapture: {
				const selphiData = result.data;
				// SELPHI FINISH
				console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionFinish: ', selphiData);
				break;
			}
			case WorkflowEventType.selphidCapture: {
				const selphidData = result.data;
				// SELPHID FINISH
				console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionFinish: ', selphidData);
				break;
			}
		}
	}
}
