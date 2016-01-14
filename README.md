llog
======
a little way to log

How to Use
===========

```javascript
'use strict';

const http = require('http');
const llog = require('llog');
const logger = llog.getLogger('server');

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
