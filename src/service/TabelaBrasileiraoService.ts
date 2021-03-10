import { Service } from 'typedi'
import cb from "campeonato-brasileiro-api"

@Service()
export class TabelaBrasileiraoService {
  private cb = cb
  contructor() { }
  async  getTableFromApi(serie: string) {
    let tabela = await cb.rodadaAtual(serie, "5")
    return tabela
  }
}