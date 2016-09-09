'use strict';

const colors = require('colors/safe');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});


exports.getLogger = function(name) {
  const pid = process.pid;
  function log() {
    let args = [].slice.call(arguments);
    let currentTime = new Date;
    let time = `${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    args.unshift(`${time} -`);
    console.log.apply(null, args);
  }
  return {
    info: function() {
      let _log = [colors.info('info '), name, pid];
      let args = [].slice.call(arguments);
      log.apply(null, _log.concat(args));

    },
    error: function() {
      let _log = [colors.error('error'), name, pid];
      let args = [].slice.call(arguments);
      log.apply(null, _log.concat(args));
    },
    warn: function() {
      let _log = [colors.warn('warn'), name, pid];
      let args = [].slice.call(arguments);
      log.apply(null, _log.concat(args));
    },
    fatal: function() {
      let _log = [colors.warn('fatal'), name, pid];
      let args = [].slice.call(arguments);
      log.apply(null, _log.concat(args));
    },
    debug: function(){
      let _log = [colors.debug('debug'), name, pid];
      let args = [].slice.call(arguments);
      log.apply(null, _log.concat(args));
    }
  }
}
