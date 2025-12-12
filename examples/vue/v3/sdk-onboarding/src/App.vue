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
<script setup lang="ts">
import {
	Language,
	TypeFamily,
	type ErrorData,
	/** SelphID imports */
	type SelphidWidgetLoadedEvent,
	type SelphidExtractionFinishEvent,
	type SelphidExtractionTimeoutEvent,
	type SelphidExceptionCapturedEvent,
	type SelphidErrorTimeoutEvent,
	type SelphidTimeoutButtonClickEvent,
	type SelphidTrackStatusEvent,
	type SelphidUserCancelEvent,
	/** Selphi imports */
	type SelphiWidgetLoadedEvent,
	type SelphiExtractionFinishEvent,
	type SelphiExtractionTimeoutEvent,
	type SelphiExceptionCapturedEvent,
	type SelphiErrorTimeoutEvent,
	type SelphiStabilizingEvent,
	type SelphiTimeoutButtonClickEvent,
	type SelphiTrackStatusEvent,
	type SelphiUserCancelEvent,
	type FacephiSelphiWidgetCustomEvent,
	type FacephiSelphidWidgetCustomEvent,
} from '@facephi/sdk-web-wc';
import facephiLogo from '@/assets/facephi_logo.svg';
import { Logger, LoggerType } from './utils/Logger';
import { ref } from 'vue';

// state variable to control the starting widget
const widget = ref('selphid');
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const apiKey = (import.meta as any).env.VITE_LICENSE_KEY;

// SDK Provider event handlers
function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
	const result = event.detail;
	Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
}

function handleEmitError(event: CustomEvent<ErrorData>) {
	const result = event.detail;
	Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
}

// SELPHI event handlers
function handleSelphiExtractionFinish(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionFinishEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);
	// Redirect to the finish component
	widget.value = 'finish';
}

function handleSelphiExtractionTimeout(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionTimeoutEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
}

function handleSelphiExceptionCaptured(event: FacephiSelphiWidgetCustomEvent<SelphiExceptionCapturedEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
}

function handleSelphiErrorTimeout(event: FacephiSelphiWidgetCustomEvent<SelphiErrorTimeoutEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
}

function handleSelphiModuleLoaded(event: FacephiSelphiWidgetCustomEvent<SelphiWidgetLoadedEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
}

function handleSelphiTimeoutErrorButtonClick(event: FacephiSelphiWidgetCustomEvent<SelphiTimeoutButtonClickEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'timeoutErrorButtonClick', result);
}

function handleSelphiUserCancel(event: FacephiSelphiWidgetCustomEvent<SelphiUserCancelEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
}

function handleSelphiTrackStatus(event: FacephiSelphiWidgetCustomEvent<SelphiTrackStatusEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
}

function handleSelphiStabilizing(event: FacephiSelphiWidgetCustomEvent<SelphiStabilizingEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
}

// SELPHID event handlers
function handleSelphidExtractionFinish(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionFinishEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
	// Redirect to Selphi
	widget.value = 'selphi';
}

function handleSelphidExtractionTimeout(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionTimeoutEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
}

function handleSelphidExceptionCaptured(event: FacephiSelphidWidgetCustomEvent<SelphidExceptionCapturedEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
}

function handleSelphidErrorTimeout(event: FacephiSelphidWidgetCustomEvent<SelphidErrorTimeoutEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
}

function handleSelphidModuleLoaded(event: FacephiSelphidWidgetCustomEvent<SelphidWidgetLoadedEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
}

function handleSelphidTimeoutErrorButtonClick(event: FacephiSelphidWidgetCustomEvent<SelphidTimeoutButtonClickEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHID, 'timeoutErrorButtonClick', result);
}

function handleSelphidUserCancel(event: FacephiSelphidWidgetCustomEvent<SelphidUserCancelEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
}

function handleSelphidTrackStatus(event: FacephiSelphidWidgetCustomEvent<SelphidTrackStatusEvent>) {
	const result = event.detail.detail;
	Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
}
</script>

<template>
  <div class="layout">
    <header class="header">
      <img :src="facephiLogo" alt="Facephi Logo" height="60" class="logo" />
    </header>

  <main class="main">
    <section class="sdk-section">
          <facephi-sdk-provider
            :apikey="apiKey"
            steps= "START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH"
            :type="TypeFamily.onboarding"
            customer-id="facephi-sdk-vue3-example"
            :language="Language.es"

            @emitData="handleEmitData($event)"
            @emitError="handleEmitError($event)"
          >

          <facephi-selphid-widget
              v-if="widget === 'selphid'"
              country="ES"
              preview-image="true"
              capture-timeout="10"
              capture-retries="3"
              show-log="false"

              @extractionFinish="handleSelphidExtractionFinish($event)"
              @extractionTimeout="handleSelphidExtractionTimeout($event)"
              @exceptionCaptured="handleSelphidExceptionCaptured($event)"
              @errorTimeout="handleSelphidErrorTimeout($event)"
			  @moduleLoaded="handleSelphidModuleLoaded($event)"
			  @timeoutErrorButtonClick="handleSelphidTimeoutErrorButtonClick($event)"
			  @userCancel="handleSelphidUserCancel($event)"
			  @trackStatus="handleSelphidTrackStatus($event)"
            >
          </facephi-selphid-widget>

            <facephi-selphi-widget
              v-if="widget === 'selphi'"
              stabilization-stage="true"
              interactible="true"
              preview-image="true"
              timeout="30000"
              show-log="false"

              @extractionFinish="handleSelphiExtractionFinish($event)"
              @extractionTimeout="handleSelphiExtractionTimeout($event)"
              @exceptionCaptured="handleSelphiExceptionCaptured($event)"
              @errorTimeout="handleSelphiErrorTimeout($event)"
              @moduleLoaded="handleSelphiModuleLoaded($event)"
              @timeoutErrorButtonClick="handleSelphiTimeoutErrorButtonClick($event)"
              @userCancel="handleSelphiUserCancel($event)"
              @trackStatus="handleSelphiTrackStatus($event)"
              @stabilizing="handleSelphiStabilizing($event)"
              >
            </facephi-selphi-widget>

            <div class="onboarding-finished" v-if="widget === 'finish'">ONBOARDING FINISHED</div>
            
          </facephi-sdk-provider>
        </section>
  </main>
  <footer class="footer">
    <div>
      <p id="copyright-year"> ©FacePhi. All rights reserved.</p>
    </div>
    <div class="framework">
      <p>Vue 3</p>
    </div>
  </footer>
</div>
</template>
