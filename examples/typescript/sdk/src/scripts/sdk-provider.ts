(async () => {
    await customElements.whenDefined('facephi-sdk-provider');   

    // SDK Provider event handlers
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string; }>) {
		const result = event.detail;
		console.log(
			'%c%s',
			'color: lime;',
			`[PROVIDER] emitData: operationId(${result.operationId}), sessionId(${result.sessionId}), extraData(${result.extraData})`,
		);
	}

    function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitError: ${result.message} (${result.statusCode})`);
	}

    const sdkProvider = document.querySelector('facephi-sdk-provider');
    if (sdkProvider) {
        sdkProvider.innerHTML = '<facephi-selphid-widget initial-tip="true" initial-tip-height="350" initial-tip-width="350" country="ES" language="es" preview-capture="true" capture-timeout="10" capture-retries="3" show-log="false"></facephi-selphid-widget>';

        sdkProvider.addEventListener('emitData', handleEmitData);
        sdkProvider.addEventListener('emitError', handleEmitError);

        const selphidWidget = document.querySelector("facephi-selphid-widget");
        
        if (selphidWidget) {
            selphidWidget.addEventListener('extractionFinish', (event) => {
                
                sdkProvider.innerHTML = '<facephi-selphi-widget initial-tip="true" disable-exit="false" stabilization-stage="false" language="es"></facephi-selphi-widget>';
                const resultMessage = event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
                console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);

                const selphiWidget = document.querySelector("facephi-selphi-widget");

                if (selphiWidget) {
                    selphiWidget.addEventListener('extractionFinish', (event) => {
                        const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
		                console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
                        sdkProvider.innerHTML = '<div>ONBOARDING FINISHED</div>';
                    });
                }
            });
        }
    }
})();