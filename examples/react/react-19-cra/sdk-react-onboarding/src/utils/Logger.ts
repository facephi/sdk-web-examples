// Constants for consistent styling
const STYLE_CONFIG = {
	padding: '2px 4px',
	borderRadius: '3px',
} as const;

// Define all possible logger types
enum LoggerType {
	SELPHI = 'SELPHI',
	SELPHID = 'SELPHID',
	SDK_PROVIDER = 'SDK_PROVIDER',
	VIDEO_RECRUITMENT = 'VIDEO_RECRUITMENT',
	VIDEO_PROVIDER = 'VIDEO_PROVIDER',
	VIDEO_ASSISTANT = 'VIDEO_ASSISTANT',
	WORKFLOW = 'WORKFLOW',
	VIDEOID = 'VIDEOID',
}

// Type for color configuration
interface ColorConfig {
	text: string;
	background: string;
}

// Interface for theme color configurations
interface ThemeColorConfig {
	light: ColorConfig;
	dark: ColorConfig;
}

// Type for the complete styles configuration
type ThemeStyles = Record<LoggerType, string>;

// Centralized color configuration
const LOGGER_COLORS: Record<LoggerType, ThemeColorConfig> = {
	[LoggerType.SELPHI]: {
		light: { text: '#eaeffe', background: '#3167FC' },
		dark: { text: '#edf1fe', background: '#4C7CFC' },
	},
	[LoggerType.SELPHID]: {
		light: { text: '#f1eafe', background: '#7636FC' },
		dark: { text: '#f4f0fe', background: '#976BF6' },
	},
	[LoggerType.SDK_PROVIDER]: {
		light: { text: '#ea580c', background: '#fff7ed' },
		dark: { text: '#fed7aa', background: '#9a3412' },
	},
	[LoggerType.VIDEO_RECRUITMENT]: {
		light: { text: '#e11d48', background: '#fff1f2' },
		dark: { text: '#fecdd3', background: '#9f1239' },
	},
	[LoggerType.VIDEO_PROVIDER]: {
		light: { text: '#4f46e5', background: '#eef2ff' },
		dark: { text: '#c7d2fe', background: '#3730a3' },
	},
	[LoggerType.VIDEO_ASSISTANT]: {
		light: { text: '#65a30d', background: '#f7fee7' },
		dark: { text: '#d9f99d', background: '#3f6212' },
	},
	[LoggerType.WORKFLOW]: {
		light: { text: '#bc6c25', background: '#fff3e0' },
		dark: { text: '#fff3e0', background: '#bc6c25' },
	},
	[LoggerType.VIDEOID]: {
		light: { text: '#bc6c25', background: '#fff3e0' },
		dark: { text: '#fff3e0', background: '#bc6c25' },
	},
};

/**
 * Generates CSS styles string from color configuration
 * @param colors - Color configuration object
 * @returns Formatted CSS string
 */
const generateStyle = (colors: ColorConfig): string => {
	return `color: ${colors.text}; background: ${colors.background}; padding: ${STYLE_CONFIG.padding}; border-radius: ${STYLE_CONFIG.borderRadius};`;
};

/**
 * Creates theme styles for all logger types
 * @param theme - Theme type ('light' or 'dark')
 * @returns Object with styles for each logger type
 */
const createThemeStyles = (theme: 'light' | 'dark'): ThemeStyles => {
	return Object.entries(LOGGER_COLORS).reduce(
		(styles, [type, colors]) => ({
			// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
			...styles,
			[type]: generateStyle(colors[theme]),
		}),
		{} as ThemeStyles,
	);
};

// Generate the final style objects
const lightStyles: ThemeStyles = createThemeStyles('light');
const darkStyles: ThemeStyles = createThemeStyles('dark');

class Logger {
	private static isDarkMode(): boolean {
		if (typeof window !== 'undefined' && window.matchMedia) {
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		return false;
	}

	/**
	 * Function to print logs from the widgets
	 * @param loggerLvl LoggerType: 'selphi' | 'selphid'
	 * @param message The message you want to display
	 * @param result The result of the event
	 */
	// biome-ignore lint/suspicious/noExplicitAny: It is "any" type because it gives us the freedom to display different types of messages, not just those related to the Selphi and SelphID events
	static printLog(loggerLvl: LoggerType, message: string, result: any) {
		const dark = Logger.isDarkMode();
		const styles = dark ? darkStyles : lightStyles;
		const chosenStyle = styles[loggerLvl];

		if (typeof result === 'object') {
			console.log(`%c[${loggerLvl}] ${message}%o`, chosenStyle, result);
		} else {
			console.log(`%c[${loggerLvl}] ${message} ${result}`, chosenStyle);
		}
	}
}

export { Logger, LoggerType };
