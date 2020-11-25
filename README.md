# Cadastro e Tramitação de Aposentadoria – Servidor.

Nome Aplicação : SEPLAG – Cadastro e Tramitação de Aposentadoria – Servidor.

### Definições de Projeto

• A aplicação deverá criar um beneficio de aposentadoria para um servidor com os seguintes campos (Nome, CPF, Órgão, matrícula).

• Não será necessário implementar operações para os servidores(CRUD), os dados dos servidores poderão ser carregado da forma que o candidato desejar.

• Ao ser criado um beneficio deve ser permitido anexar documentos em PDF para uma das seguintes categorias, como pode ser visto na imagem processo_virtual_aposentadoria.jpg:



• Ao ser criado um beneficio deve ser permitido anexar documentos em PDF para uma das seguintes categorias, como pode ser visto na imagem processo_virtual_aposentadoria.jpg.

```
* Identificação
* Vida Funcional
* Contagem de tempo
* Remuneração/Proventos.
```

• A aplicação deverá ter uma tela para visualização dos documentos anexados semelhante ao arquivo processo_virtual_aposentadoria.jpg.

```
processo_virtual_aposentadoria.jpg[LINK]
```

• Permitir a tramitação do processo de um setor para outro semelhante ao arquivo processo_virtual_movimentacoes.jpg os locais de tramitações podem ser fictícios ou ter como base as imagem anexadas.
```
processo_virtual_movimentacoes.jpg[LINK]
```
• As imagens anexadas ao e-mail são apenas como exemplo
• O candidato está livre para desenvolver a interface da forma que desejar.[???]

• Deverá entrar em contato por e-mail para esclarecer dúvidas sobre os requisitos.

• O projeto deve utilizar Angular e ser compartilhado do GitHub e enviado um e-mail com o link do repositório.

• A aplicação deverá rodar em algum container da sua escolha.

• Descrever um manual de repasse de tecnologia e negócio.

## Tecnologias envolvidas
* Angular 
* Firebase
* Npm
* NodeJs
* Typescript

## Instalação

##### Clone o projecto com o seguinte comando:
```
git clone https://github.com/engcomAndre/Desafio-SEPLAG.git
```

##### Instale as dependencias do projeto com o comando:
```
npm install
```
##### Levante a aplicação com o comando:
```
ng serve 
```
##### Acesse o browser na endereço :
```
http://localhost:4200/
```


## Instalação com docker 

##### Clone o projecto com o seguinte comando:
```
git clone https://github.com/engcomAndre/Desafio-SEPLAG.git
```
##### Realize o build do projeto:
```
docker build -t desafio-seplag .
```
##### Realize o deploy local do container do projeto com o comando:
```
docker run -d --name desafio-seplag -p 80:80  desafio-seplag
```
##### Acesse o browser na endereço :
```
http://localhost:8080/
```

## Licensa
[MIT](https://choosealicense.com/licenses/mit/)

# DesafioSeplag

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
