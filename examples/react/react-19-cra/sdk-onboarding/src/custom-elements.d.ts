declare module 'react/jsx-runtime' {
	namespace JSX {
		interface IntrinsicElements {
			'facephi-sdk-provider': any;
			'facephi-selphi-widget': any;
			'facephi-selphid-widget': any;
			'facephi-video-recruitment-widget': any;
			main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
		}
	}
}
