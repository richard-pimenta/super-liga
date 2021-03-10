import "reflect-metadata"
import * as express from "express";
import { createExpressServer } from "routing-controllers";
import { server } from "../configs/Index";
import { SuperLiga } from "../controllers/SuperLiga";
// import { loadCompression, loadHttpLogger } from "../middlewares";

export class Server {
  private app: express.Application;

  init(): void {
    this.app = createExpressServer({
      routePrefix: 'api',
      controllers: [SuperLiga]
    })
    console.log("Server Configurado");
  }
  start() {
    this.app.listen(server.port, () => {
      console.log("server running at port " + server.port);
    })
  }
}

