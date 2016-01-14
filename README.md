logl
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

```javascript
functions:

logger.info();
logger.error();
logger.warn();
logger.fatal();
logger.debug();
```
