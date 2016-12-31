import {Server} from './modules/server';

const app = new Server();

app.setup();

app.setRoutes();

app.startServer();
