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
import { Language, TypeFamily } from '@facephi/sdk-web-wc';
import {
	Language as LenguageSelphi,
	type ExtractionFinishEvent as SelphiExtractionFinishEvent,
	type ExtractionTimeoutEvent as SelphiExtractionTimeoutEvent,
	type ExceptionCapturedEvent as SelphiExceptionCapturedEvent,
	type ErrorTimeoutEvent as SelphiErrorTimeoutEvent,
} from '@facephi/selphi-web-component';
import {
	Language as LenguageSelphid,
	type ExtractionFinishEvent as SelphidExtractionFinishEvent,
	type ExtractionTimeoutEvent as SelphidExtractionTimeoutEvent,
	type ExceptionCapturedEvent as SelphidExceptionCapturedEvent,
	type ErrorTimeoutEvent as SelphidErrorTimeoutEvent,
} from '@facephi/selphid-web-component';
import facephiLogo from '@/assets/facephi_logo.svg';
import { ref } from 'vue';

// state variable to control the starting widget
const widget = ref('selphid');
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const apiKey = (import.meta as any).env.VITE_LICENSE_KEY;

// SDK Provider event handlers
function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
	const result = event.detail;
	console.log(
		'%c%s%s\n%s\n%s\n%s',
		'color: #00FF00;',
		'[PROVIDER] onEmitData: ',
		'',
		`operationId: ${result.operationId}`,
		`sessionId: ${result.sessionId}`,
		`extraData: ${result.extraData}`,
	);
}

function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
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

// SELPHI event handlers
function handleSelphiExtractionFinish(event: CustomEvent<SelphiExtractionFinishEvent>) {
	//const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
	const result = event.detail.detail;
	console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionFinish: ', result);
	// Redirect to the finish component
	widget.value = 'finish';
}

function handleSelphiExtractionTimeout(event: CustomEvent<SelphiExtractionTimeoutEvent>) {
	const result = event.detail.detail;
	console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionTimeout: ', result);
}

function handleSelphiExceptionCaptured(event: CustomEvent<SelphiExceptionCapturedEvent>) {
	const result = event.detail.detail;
	console.log('%c%s', 'color: #00FFFF;', '[SELPHI] exceptionCaptured: ', result);
}

function handleSelphiErrorTimeout(event: CustomEvent<SelphiErrorTimeoutEvent>) {
	const result = event.detail.detail;
	console.log('%c%s', 'color: #00FFFF;', '[SELPHI] errorTimeout: ', result);
}

// SELPHID event handlers
function handleSelphidExtractionFinish(event: CustomEvent<SelphidExtractionFinishEvent>) {
	const result = event.detail.detail;
	console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionFinish: ', result);
	// Redirect to Selphi
	widget.value = 'selphi';
}

function handleSelphidExtractionTimeout(event: CustomEvent<SelphidExtractionTimeoutEvent>) {
	const result = event.detail.detail;
	console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionTimeout: ', result);
}

function handleSelphidExceptionCaptured(event: CustomEvent<SelphidExceptionCapturedEvent>) {
	const result = event.detail.detail;
	console.log('%c%s', 'color: #FF00FF;', '[SELPHID] exceptionCaptured: ', result);
}

function handleSelphidErrorTimeout(event: CustomEvent<SelphidErrorTimeoutEvent>) {
	const result = event.detail.detail;
	console.log('%c%s', 'color: #FF00FF;', '[SELPHID] errorTimeout: ', result);
}
</script>

<template>
  <header>
      <section class="header">
        <a href="https://www.facephi.com/" title="FacePhi" target="https://facephi.com/">
          <img :src="facephiLogo" alt="Facephi Logo" height="30" />
        </a>
      </section>
    </header>
  <main>
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
              :language="LenguageSelphid.ES"
              preview-capture="true"
              capture-timeout="10"
              capture-retries="3"
              show-log="false"

              @extractionFinish="handleSelphidExtractionFinish($event)"
              @extractionTimeout="handleSelphidExtractionTimeout($event)"
              @exceptionCaptured="handleSelphidExceptionCaptured($event)"
              @errorTimeout="handleSelphidErrorTimeout($event)"
            >
          </facephi-selphid-widget>

            <facephi-selphi-widget
              v-if="widget === 'selphi'"
              stabilization-stage="true"
              :language="LenguageSelphi.ES"
              interactible="true"
              preview-capture="true"
              timeout="30000"
              show-log="false"

              @extractionFinish="handleSelphiExtractionFinish($event)"
              @extractionTimeout="handleSelphiExtractionTimeout($event)"
              @exceptionCaptured="handleSelphiExceptionCaptured($event)"
              @errorTimeout="handleSelphiErrorTimeout($event)"
              >
            </facephi-selphi-widget>

            <div v-if="widget === 'finish'">The process has been completed</div>
            
          </facephi-sdk-provider>
      </section>
  </main>
  <footer>
      <p>{{ new Date().getFullYear() }} ©FacePhi. All rights reserved.</p>
      <div class="framework">VueJS 3</div>
  </footer>
</template>
