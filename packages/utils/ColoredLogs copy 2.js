const logger = {
	log(msg, color) {
		var css = '',
			paint = {
				// default colors
				clr: '#212121',
				bgc: '#b0bec5',
				sym: '💬 ',
			},
			colors = {
				error: { clr: '#ffebee', bgc: '#c62828', sym: '\u26D4 ' }, // red
				success: { clr: '#e8f5e9', bgc: '#2e7d32', sym: '\u2705 ' }, // green
				warning: { clr: '#fff3e0', bgc: '#f4511e', sym: '⚠ ' }, // orange
				info: { clr: '#ede7f6', bgc: '#651fff', sym: 'ℹ ' }, // purple
			};

		// overwriting default colors if color given
		if (colors.hasOwnProperty(color)) {
			paint.clr = colors[color].clr;
			paint.bgc = colors[color].bgc;
			paint.sym = colors[color]?.sym || '';
		}
		css = 'color:' + paint.clr + ';font-weight:bold; background-color: ' + paint.bgc + '; padding: 3px 6px; border-radius: 2px;';

		console.log(paint.sym + '%c' + msg, css);
	},
	base(msg, color) {
		return this.log(msg, color);
	},
	default(msg) {
		return this.log(msg);
	},
	error(msg) {
		return this.log(msg, 'error');
	},
	success(msg) {
		return this.log(msg, 'success');
	},
	warning(msg) {
		return this.log(msg, 'warning');
	},
	info(msg) {
		return this.log(msg, 'info');
	},
};

logger.default('Default');
logger.error('Error', 'error');
logger.success('Success', 'success');
logger.warning('Warning', 'warning');
logger.info('Info', 'info');

// ❌
// ✅
// ℹ
// ✔
// ⚠
