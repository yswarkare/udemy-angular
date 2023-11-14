"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor() { }
    default(msg, color) {
        let css = '';
        let paint = {
            // default colors
            clr: '#212121',
            bgc: '#b0bec5',
            sym: '💬 ',
        };
        const colors = {
            log: { clr: '#212121', bgc: '#b0bec5', sym: '💬 ' },
            error: { clr: '#ffebee', bgc: '#c62828', sym: '\u26D4 ' },
            success: { clr: '#e8f5e9', bgc: '#2e7d32', sym: '\u2705 ' },
            warning: { clr: '#fff3e0', bgc: '#f4511e', sym: '⚠ ' },
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
    log(msg) {
        return this.default(msg, 'log');
    }
    error(msg) {
        return this.default(msg, 'error');
    }
    success(msg) {
        return this.default(msg, 'success');
    }
    warning(msg) {
        return this.default(msg, 'warning');
    }
    info(msg) {
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
exports.default = new Logger();
