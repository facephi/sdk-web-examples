import type { TrackingSteps, TypeFamily, FlowNode, FlowEdge, CameraRotation, CameraType, TemplateFormat} from '@facephi/sdk-web-wc';
import type { VideoRecordQuality, AnonymizationMode, BarcodeSide, ExpectedSides, DocumentType } from '@facephi/sdk-web-wc';
import type { ErrorTimeoutEvent, ExceptionCapturedEvent, ExtractionFinishEvent, ExtractionTimeoutEvent, TimeoutButtonClickEvent, TrackStatusEvent, UserCancelEvent} from '@facephi/sdk-web-wc';
import type { ExtractionFinishEvent as SelphidExtractionFinishEvent, ExtractionTimeoutEvent as SelphidExtractionTimeoutEvent } from '@facephi/selphid-web-component';

declare module 'react/jsx-runtime' {
		namespace JSX {
				interface IntrinsicElements {
					'facephi-sdk-provider': {
						apiKey: string;
						autoInitTracking?: boolean;
						autoInitWorkflow?: boolean;
						bundlePath?: string;
						customerId?: string;
						debug?: boolean;
						desktopView?: boolean;
						disabled?: boolean;
						landingApiKey?: string;
						language?: string;
						operationId?: string;
						qr?: boolean;
						qrExtraParams?: string;
						steps?: TrackingSteps[] | string;
						tenantId?: string;
						theme?: {
							fontName?: string;
							logo?: string;
							primaryColor?: string;
							secondaryColor?: string;
							tertiaryColor?: string;
							backgroundColor?: string;
						};
						type?: TypeFamily | string;
						workflow?: FlowNode[] | FlowEdge[]
						onemitData?: (event: CustomEvent<{ operationId: string; sessionId: string; extraData: string; }>) => void;
						onemitError?: (event: CustomEvent<{ statusCode: number; message: string; }>) => void;
						onemitExtraData?: (event: CustomEvent<string>) => void;
						onemitOperationId?: (event: CustomEvent) => void;
						onemitSessionId?: (event: CustomEvent<string>) => void;
						onemitWorkflowEvent?: (event: CustomEvent<{ type: string; stepId?: string; data?: string; }>) => void;						
						children?: React.ReactNode;
					} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
					'facephi-selphi-widget': {
						advancedTracking?: boolean;
						audible?: string;
						cameraHeight?: number;
						cameraId?: string;
						cameraRotation?: CameraRotation.DEG0 | CameraRotation.DEG180 | CameraRotation.DEG270 | CameraRotation.DEG90;
						cameraSwitchButton?: boolean;
						cameraType?: CameraType.Environment | CameraType.User;
						cameraWidth?: number;
						cropFactor?: number;
						debugMode?: boolean;
						disableExit?: boolean;
						engineLocation?: string;
						errorTimer?: number;
						externalCamera?: MediaStream | string;
						faceTracking?: boolean;
						imageQuality?: number;
						initialTip?: boolean;
						initialTipHeight?: number;
						initialTipWidth?: number;
						interactible?: boolean;
						language?: string;
						livenessMoveFailedAttempts?: number;
						livenessMoveSteps?: number;
						livenessMoveTimeout?: number;
						loadingAnimation?: string;
						logImages?: boolean;
						logo?: string;
						previewCapture?: boolean;
						settingsStrictness?: boolean;
						showLog?: boolean;
						stabilizationStage?: boolean;
						templateFormat?: TemplateFormat.Base64 | TemplateFormat.ByteArray;
						timeout?: number;
						tutorial?: boolean;
						tutorialAnimations?: string[];
						videoQuality?: VideoRecordQuality.High | VideoRecordQuality.Low | VideoRecordQuality.Medium;
						videoRecord?: boolean;
						videoRecordAudio?: boolean;
						onerrorTimeout?: (event: CustomEvent<ErrorTimeoutEvent>) => void;
						onexceptionCaptured?: (event: CustomEvent<ExceptionCapturedEvent>) => void;
						onextractionFinish?: (event: CustomEvent<ExtractionFinishEvent>) => void;
						onextractionTimeout?: (event: CustomEvent<ExtractionTimeoutEvent>) => void;
						onmoduleLoaded?: (event: CustomEvent<any>) => void;
						ontimeoutErrorButtonClick?: (event: CustomEvent<TimeoutButtonClickEvent>) => void;
						ontrackStatus?: (event: CustomEvent<TrackStatusEvent>) => void;
						onuserCancel?: (event: CustomEvent<UserCancelEvent>) => void;
					} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
					'facephi-selphid-widget': {
						advancedTracking?: boolean;
						allowUncertain?: boolean;
						allowUnknownDocuments?: boolean;
						anonymizationMode?: AnonymizationMode.FullResult | AnonymizationMode.ImageOnly | AnonymizationMode.None | AnonymizationMode.ResultFieldsOnly;
						audible?: string;
						barcode?: boolean;
						barcodeSide?: BarcodeSide.Back | BarcodeSide.Both | BarcodeSide.Front;
						blurredThreshold?: number;
						cameraHeight?: number;
						cameraId?: string;
						cameraOverflow?: boolean;
						cameraSelection?: boolean;
						cameraType?: CameraType.Environment | CameraType.User;
						cameraWidth?: number;
						capturePadding?: number;
						captureRetries?: number;
						captureTimeout?: number;
						chooseDocument?: boolean;
						country?: string;
						cropFactor?: number;
						debugMode?: boolean;
						disableExit?: boolean;
						documentMode?: ExpectedSides.Auto | ExpectedSides.SingleSide;
						documentType?: DocumentType;
						engineFallback?: boolean;
						engineLocation?: string;
						errorTimer?: number;
						externalCamera?: MediaStream | string;
						imageQuality?: number;
						initialTip?: boolean;
						initialTipHeight?: number;
						initialTipWidth?: number;
						keepEngineAlive?: boolean;
						language?: string;
						loadingAnimation?: string;
						logo?: string;
						maxAllowedMissmatches?: number;
						previewCapture?: boolean;
						progressiveMismatches?: boolean;
						retryOnlyCurrentSide?: boolean;
						settingsStrictness?: boolean;
						showLog?: boolean;
						specificdata?: string | string[];
						tokenizerLocation?: string;
						tutorial?: boolean;
						tutorialAnimations?: string[];
						videoQuality?: VideoRecordQuality.High | VideoRecordQuality.Low | VideoRecordQuality.Medium;
						videoRecord?: boolean;
						videoRecordAudio?: boolean;
						onerrorTimeout?: (event: CustomEvent<ErrorTimeoutEvent>) => void;
						onexceptionCaptured?: (event: CustomEvent<ExceptionCapturedEvent>) => void;
						onextractionFinish?: (event: CustomEvent<SelphidExtractionFinishEvent>) => void;
						onextractionTimeout?: (event: CustomEvent<SelphidExtractionTimeoutEvent>) => void;
						onmoduleLoaded?: (event: CustomEvent<any>) => void;
						ontimeoutErrorButtonClick?: (event: CustomEvent<TimeoutButtonClickEvent>) => void;
						ontrackStatus?: (event: CustomEvent<TrackStatusEvent>) => void;
						onuserCancel?: (event: CustomEvent<UserCancelEvent>) => void;
					} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
				}
		}
}