<script setup lang="ts">
import { Language } from '@facephi/sdk-web-wc';
import type { ExtractionFinishEvent as SelphiExtractionFinishEvent } from '@facephi/selphi-web-component';
import type { ExtractionFinishEvent as SelphidExtractionFinishEvent } from '@facephi/selphid-web-component';

import facephiLogo from '@/assets/facephi_logo.svg';
import { ref } from 'vue';

const widget = ref('selphi');
const licenseKey = import.meta.env.VITE_LICENSE_KEY || '';

function handleEmitOperationId(event: CustomEvent<string>) {
		const result = event.detail;
		console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitOperationId: ${result}`);
}

function handleSelphiExtractionFinish(event: CustomEvent<SelphiExtractionFinishEvent>) {
		const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
		console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
		widget.value = 'selphid';
	}

function handleSelphidExtractionFinish(event: CustomEvent<SelphidExtractionFinishEvent>) {
  const resultMessage = event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
  console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
  widget.value = 'finish';
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
            :apikey="licenseKey"
            debug="false"
            :language="Language.en"
            disabled            
            @emitOperationId="handleEmitOperationId($event)"
          >

            <facephi-selphi-widget
              v-if="widget === 'selphi'"
              :language="Language.en"
              initial-tip="true"
              @extractionFinish="handleSelphiExtractionFinish($event)"
              >
            </facephi-selphi-widget>

            <facephi-selphid-widget
              v-if="widget === 'selphid'"
              allow-unknown-documents="true"
              :language="Language.en"
              initial-tip="true"
              @extractionFinish="handleSelphidExtractionFinish($event)"
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
