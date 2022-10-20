import app from './app.js';
import { SERVERPORT } from './config/config.js';

app.listen(SERVERPORT);
console.log('Server running on port', SERVERPORT);
