import {
  Get,
  JsonController,
  Param,
} from "routing-controllers";
import { TabelaBrasileiraoService } from "../service/Index"



@JsonController()
export class SuperLiga {
  private tabelaBrasileiraoService: TabelaBrasileiraoService = new TabelaBrasileiraoService()
  constructor() { };

  @Get("/tabela/fase/:serie")
  async getTabelaBrasileirao(@Param("serie") serie: string): Promise<any> {
    const ret = await this.tabelaBrasileiraoService.getTableFromApi(serie)
    return ret
  }

}
