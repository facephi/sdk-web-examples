<script setup lang="ts">
import { Language } from '@facephi/sdk-web-wc';
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
const widget = ref('selphi');
const apiKey = (import.meta as any).env.VITE_LICENSE_KEY;

// SDK Provider event handlers
function handleEmitOperationId(event: CustomEvent<string>) {
	const result = event.detail;
	console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitOperationId: ${result}`);
}

// SELPHI event handlers
function handleSelphiExtractionFinish(event: CustomEvent<SelphiExtractionFinishEvent>) {
	const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
	console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
	widget.value = 'selphid';
}

function handleSelphiExtractionTimeout(eventData: CustomEvent<SelphiExtractionTimeoutEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHI] extractionTimeout: ${result}`);
}

function handleSelphiExceptionCaptured(eventData: CustomEvent<SelphiExceptionCapturedEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHI] exceptionCaptured: ${result}`);
}

function handleSelphiErrorTimeout(eventData: CustomEvent<SelphiErrorTimeoutEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHI] errorTimeout: ${result}`);
}

// SELPHID event handlers

// selphid events
function handleSelphidExtractionFinish(event: CustomEvent<SelphidExtractionFinishEvent>) {
	const resultMessage =
		event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument
			? 'OK'
			: 'KO';
	console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
	widget.value = 'finish';
}

function handleSelphidExtractionTimeout(eventData: CustomEvent<SelphidExtractionTimeoutEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHID] extractionTimeout: ${result}`);
}

function handleSelphidExceptionCaptured(eventData: CustomEvent<SelphidExceptionCapturedEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHID] exceptionCaptured: ${result}`);
}

function handleSelphidErrorTimeout(eventData: CustomEvent<SelphidErrorTimeoutEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHID] errorTimeout: ${result}`);
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
            debug="false"
            :language="Language.es"         
            @emitOperationId="handleEmitOperationId($event)"
          >

            <facephi-selphi-widget
              v-if="widget === 'selphi'"
              initial-tip="true"
              initial-tip-height="350"
              initial-tip-width="350"
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

            <facephi-selphid-widget
              v-if="widget === 'selphid'"
              initial-tip="true"
              initial-tip-height="350"
              initial-tip-width="350"
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
            ></facephi-selphid-widget>

            <div v-if="widget === 'finish'">The process has been completed</div>
            
          </facephi-sdk-provider>
      </section>
  </main>
  <footer>
      <p>{{ new Date().getFullYear() }} ©FacePhi. All rights reserved.</p>
      <div class="framework">VueJS 3</div>
  </footer>
</template>
