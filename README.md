## Descrição

O objetivo desse projeto é calcular hipoteticamente a posição final de _rovers_ em determinados platôs. Para isso deve-se considerar como entrada um arquivo de texto no seguinte padrão:

> Linha 1: Dimensão do platô. Exemplo: 5 5 (Significa nos eixos x e y o platô tem de 0 a 5 unidades de espaço).
> 
> Linha 2: A coordenada inicial do _rover_ + direção representado pela inicial de um dos pontos cardeais em inglês. Exemplo: 1 2 N (Significa que o _rover_ inicia no eixo x na unidade 1 e no eixo y na unidade 2, com direção para o Norte).
> 
> Linha 3: Os movimentos que o _rover_ fará, sendo M para indicar que o _rover_ deve se mover uma posição na direção em que está, L e R para indicar uma rotação de 90º para a esquerda ou direita, respectivamente. Exemplo: MLMRMM.
>
>É possível adicionar quantos _rovers_ forem desejados seguindo as orientações das linhas 2 e 3 sequencialmente (respeitando o limite máximo de tamanho de arquivo configurado).

A estrutura de pastas adotada é uma adaptação da proposta padrão do próprio _framework_ ([Nestjs](https://docs.nestjs.com)) com adição de algumas boas práticas de separação em camadas. Nesse caso, o diretório _**common**_ sendo o módulo comum que contém arquivos de configuração para configurações adicionais como _cors_ e _swagger_. Já o diretório _**rover**_ sendo o módulo que contém as camadas de domínio, de infraestrutura e de aplicação da entidade _rover_, contendo as entidades que fazem sentido para este domínio com seus atributos e comportamentos (modelos não anêmicos), os _dtos_ necessários, _mappers_ para algumas estruturas, a camada de infraestrutura que nesse caso é representada pelo _controller_ que possui o ponto de entrada mapeado (_endpoint_) e a camada de aplicação representada pelo serviço ou caso de uso. Por fim, foi separado no diretório _**test**_ ( ao lado do _**src**_) tudo o que era relacionado a testes e a execução dos mesmos.

## Instalação

Para instalar as dependências basta executar:

```bash
$ yarn
```

## Executando a aplicação

É possível executar a aplicação de duas maneiras diferentes.

A primeira e mais comum, é executando algum dos comandos abaixo:

```bash
# desenvolvimento
$ yarn start

# mode observador
$ yarn start:dev

# produção
$ yarn start:prod
```

A segunda é através de um _container_ configurado apenas para desenvolvimento e com _reload_ automático sempre que algum dos arquivos observados é salvo. Para isso basta executar:
```bash
$ docker-compose up
# ou
$ docker-compose up -d
```

## Documentação

Uma vez que a aplicação estiver executando é possível fazer as chamadas HTTP diretamente para ela. Caso prefira uma outra abordagem, foi configurado junto da aplicação uma documentação _swagger_, nesse caso basta acessar `http://localhost:3333/api` e a página será carregada contendo os recursos adicionados.

OBS: Arquivos que podem ser usados como teste podem ser encontrados em `/test/mocks`.

## Testes

Foram feitos dois tipos de testes automatizados, de unidade e de integração (que por convenção do _framework_ utilizado é chamado de _e2e_).

O propósito do teste unitário é testar o serviço ou caso de uso passando por todos os fluxos e linhas do arquivo validando o funcionamento correto em cenários de sucesso e de exceção.

Já o propósito do teste de integração ou _e2e_ é validar o método HTTP, o _endpoint_ utilizado e as entradas de dados. Por exemplo, foram feitas validações de tamanho e tipo de arquivo de entrada que são validados nesses testes.

Para executar os testes basta executar:

```bash
$ yarn test
```
