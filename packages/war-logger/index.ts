type Log = {
	clr: string;
	bgc: string;
	sym: string;
};

type LogType = {
	log: Log;
	error: Log;
	success: Log;
	warning: Log;
	info: Log;
};

interface LoggerInf {
	default: Function;
	log: Function;
	error: Function;
	success: Function;
	warning: Function;
	info: Function;
}

class Logger implements LoggerInf {
	constructor() {}
	default(msg: string, color: string) {
		let css = '';
		let paint: Log = {
			// default colors
			clr: '#212121',
			bgc: '#b0bec5',
			sym: '💬 ',
		};
		const colors: LogType = {
			log: { clr: '#212121', bgc: '#b0bec5', sym: '💬 ' },
			error: { clr: '#ffebee', bgc: '#c62828', sym: '\u26D4 ' }, // red
			success: { clr: '#e8f5e9', bgc: '#2e7d32', sym: '\u2705 ' }, // green
			warning: { clr: '#fff3e0', bgc: '#f4511e', sym: '⚠ ' }, // orange
			info: { clr: '#ede7f6', bgc: '#651fff', sym: 'ℹ ' }, // purple
		};

		// overwriting default colors if color given
		if (colors.hasOwnProperty(color)) {
			switch (color) {
				case 'log':
					paint = colors.log;
					break;
				case 'error':
					paint = colors.error;
					break;
				case 'success':
					paint = colors.success;
					break;
				case 'warning':
					paint = colors.warning;
					break;
				case 'info':
					paint = colors.info;
					break;
			}
		}
		css = 'color:' + paint.clr + ';font-weight:bold; background-color: ' + paint.bgc + '; padding: 3px 6px; border-radius: 2px;';

		console.log(paint.sym + '%c' + msg, css);
	}
	public log(msg: string) {
		return this.default(msg, 'log');
	}
	public error(msg: string) {
		return this.default(msg, 'error');
	}
	public success(msg: string) {
		return this.default(msg, 'success');
	}
	public warning(msg: string) {
		return this.default(msg, 'warning');
	}
	public info(msg: string) {
		return this.default(msg, 'info');
	}
}

// logger.log('Default');
// logger.error('Error');
// logger.success('Success');
// logger.warning('Warning');
// logger.info('Info');

// ❌
// ✅
// ℹ
// ✔
// ⚠

export default new Logger();
