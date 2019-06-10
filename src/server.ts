import config from "./config";
import app from "./app";

app.listen(config.server.port, () => {
    console.log(`Express ${config.profile} server listening on port ${config.server.port}`);
    console.log(`Swagger docs at ${config.host}swagger/`);
});
