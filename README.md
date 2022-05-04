# Introdução
Foram implementadas duas views, sendo a `dashbord` e `list` conforme solicitado no exercicio.<br>
Por questão de tempo, optei por escrever testes unitários apenas das views/funcionalidades, já que devido a opção de componentização atomica, foi gerado um grande volume de artefatos.

# Passos para execução do projeto

Após clonar o projeto para o disco local, executar os passos à baixo:

`npm i` Fazer instalação das dependencias necessárias

`npm start` - Iniciar servidor

Após aguardar o startup do servidor, a aplicação estará acessivel no endereço `http://localhost:4200`

# Components disponíveis
Este projeto foi desenvolvido utilizando o conceito "Atomic Design", portanto todos os components são reutilizaveis e possuem seus modulos individuais. Por comodidade e prevendo que todos os componentes precisação ser utilizados nas telas, existe o módulo `ComponentsModule` que agrupa todos. Segue a baixo listagem dos componentes disponíveis:

## Button
Componente para gerar botão na view
## Card
Componente que permite Título para orgenização e agrupamento das áreas da tela
## Comobbox
Componente para seleção de opções pré definidas
## DynamicTable
Tabela gerada dinamicamente através da configuração de um modelo de dados.
## Filter
Componente para filtrar dados nas listagens. O modo principal consistema em digitar os dados e clicar em confirmar. Opcionalmente poderá ser optada pela opção debounced
## Input
Componente para entrada de dados
## Paginator
Componente para paginação de tabelas
## Table
Componente de tabela já estilizada