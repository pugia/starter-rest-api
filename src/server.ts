import config from "./config";
import app from "./app";

app.listen(config.server.port, () => {
    console.log('Express server listening on port: ' + config.server.port);
});