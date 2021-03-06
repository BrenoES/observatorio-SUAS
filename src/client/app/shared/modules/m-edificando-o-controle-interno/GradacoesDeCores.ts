/** <pre>
 * GradacoesDeCores
 * ================
 * (created by luiz on Qui, jun, 08, 2017)
 *
 * Controla as classes CSSes que devem ser usadas para se exibir as notas nas cores corretas,
 * com relação ao valor das mesmas.
 *
 * Esta classe foi feita para ser utilizada da seguinte maneira:
 *  - As classes definidas na variável 'classesCSS' devem estar disponíveis no componente ou para toda a aplicação
 *  - Os componentes que desejam usar esta funcionalidade, devem incluir esta classe em seu constructor. Nome recomendado da variável injetada: gradacoes
 *  - O HTML deve fazer chamadas do tipo: <h4 [ngClass]="gradacoes.getCSSClass(nota)">{{nota}}</h4>
 *
 * Por padrão, estas classes estão definidas no arquivo 'GradacoesDeCores.scss' dentro de themes/.../css/ e deve ser incluída pelo 'main.scss'
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// angular
import { Injectable } from '@angular/core';

@Injectable()
export class GradacoesDeCores {

  // transformações do nome do campo para o título, na ordem em que devem aparecer.
  public listaDeDimensoesETitulos: string[][] = [
    ['geral',                    'Geral'],
    ['financiamento',            'Financiamento'],
    ['controleSocial',           'Controle Social'],
    ['gestao',                   'Gestão'],
    ['numeroEquipamentos',       'Número de Equipamentos'],
    ['coberturaBolsaFamilia',    'Cobertura do Bolsa Família'],
    ['coberturaCadastroUnico',   'Cobertura do Cadastro Único'],
    ['beneficiosEventuais',      'Benefícios Eventuais'],
  ];
  public mapaDeDimensoesParaTitulos: any = {};

  // gradações
  private notaMaxima: number = 10;
  private notaMinima: number = 0;

  // gradações -- os valores em 'faixas' denotam o limite superior da nota
  private gradacoes:       number   = 6;
  private faixas:          number[] = [2,                                   4,                                    6,                                            7.5,                                            9,                                      10];
  private classesCSSCores: string[] = ['notaEmProjeto',                     'notaEmAlicerce',                     'notaConstrucaoIniciada',                     'notaConstrucaoAdiantada',                      'notaEmAcabamento',                     'notaConstruido'];
  private imgsConstrucao:  string[] = ['Ilustracao_SUAS_fase_1.png',        'Ilustracao_SUAS_fase_2.png',         'Ilustracao_SUAS_fase_3.png',                 'Ilustracao_SUAS_fase_4.png',                   'Ilustracao_SUAS_fase_5.png',           'Ilustracao_SUAS_fase_6.png'];
  private animaConstrucao: string[] = ['slideInUp', 'slideInUp', 'slideInUp', 'slideInUp', 'slideInUp', 'slideInUp']

  constructor() {
    for (let campo of this.listaDeDimensoesETitulos) {
      this.mapaDeDimensoesParaTitulos[campo[0]] = campo[1];
    }
  }

  /** Retorna a classe CSS para ser usada para colorificar o valor da nota passado */
  public getCSSClass(nota: number): string {
    for (let i: number = 0; i<this.gradacoes; i++) {
      if (nota < this.faixas[i]) {
        return this.classesCSSCores[i];
      }
    }
    return this.classesCSSCores[this.classesCSSCores.length-1];
  }

  /** Faz a mesma coisa que 'getCSSClass(nota), porém adiciona animações baseadas em delay'.
   *  Usada pelo componente 'e-dimensoes' para mostrar várias notas. */
  public getAnimacaoCSSClass(nota: number, delay: number): any {
    let ngClass = {'animated': true, 'slideInUp': true};
    ngClass['anim'+delay]      = true;
    ngClass[this.getCSSClass(nota)] = true;
    return ngClass;
  }

  /** Retorna a imagem representando o estágio da construção atual */
  public getImagemConstrucao(nota: number): string {
    let img: string = this.imgsConstrucao[this.imgsConstrucao.length-1];
    for (let i: number = 0; i<this.gradacoes; i++) {
      if (nota < this.faixas[i]) {
        img = this.imgsConstrucao[i];
        break;
      }
    }
    return `./assets/img/${img}`;
  }

  /** Retorna as classes CSS descrevendo a animação (de animate.css) a usar na apresentação do prédio.
   *  Pela forma com que o animate.css é construído, a animação só rodará quando o valor desta função mudar */
  public getAnimacaoImagemConstrucao(nota: number): any {
    let ngClass = {'animated': true};
    let animacao: string = this.animaConstrucao[this.animaConstrucao.length-1];
    for (let i: number = 0; i<this.gradacoes; i++) {
      if (nota < this.faixas[i]) {
        animacao = this.animaConstrucao[i];
        break;
      }
    }
    ngClass[animacao] = true;
    return ngClass;
  }

}
