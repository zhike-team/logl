'use strict'

exports.getLogger = function(name) {
  const pid = process.pid;
  return {
    info: function() {
      let args = [].slice.call(arguments);
      args.push(name, 'info ', pid);
      log.apply(null, args);

    },
    error: function() {
      let args = [].slice.call(arguments);
      args.push(name, 'error', pid);
      log.apply(null, args);
    },
    warn: function() {
      let args = [].slice.call(arguments);
      args.push(name, 'warn', pid);
      log.apply(null, args);
    },
    fatal: function() {
      let args = [].slice.call(arguments);
      args.push(name, 'fatal', pid);
      log.apply(null, args);
    },
    debug: function(){
      let args = [].slice.call(arguments);
      args.push(name, 'debug', pid);
      log.apply(null, args);
    }
  }
}
