Logl
======
a little way to log


Install
========
npm install logl --save


How to Use
===========

```javascript
'use strict';

const http = require('http');
const logl = require('logl');
const logger = logl.getLogger('server');

http.createServer(app).listen(port, function(){
  logger.info('server was running at:', port)
})
```

Why i write this package?
=========================
if you project use pm2, we do not need other log package, because pm2 will according to
the io form console to log and save it in Dir `.pm2/log/`.

```javascript
functions:

logger.info();
logger.error();
logger.warn();
logger.fatal();
logger.debug();
```
