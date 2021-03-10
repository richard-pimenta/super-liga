import {
  Get,
  JsonController,
} from "routing-controllers";
@JsonController()
export class SuperLiga {
  @Get("/home")
  getTabelaBrasileirão() {
    return "hello world Super Liga";
  }

}
