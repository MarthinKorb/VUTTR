# VUTTR 🛠

**Very Usefull Tools to Remember**

Aplicação que armazena suas ferramentas favoritas

----------------------------------------------------

## Tecnologias Utilizadas:

#### ReactJS, Typescript, StyledComponents, Jest, Axios, Yup, 

----------------------------------------------------

<p align="center" border-radius="4px">
<img src=".github/exp1.png" width=800">
<img src=".github/exp2.png" width=800">
<img src=".github/exp3.png" width=800">
<img src=".github/exp4.png" width=800">
<img src=".github/exp5.png" width=800">
<img src=".github/exp6.png" width=800">
</p>

----------------------------------------------------

## Instalação | Execução

Clone esse repositório rodando o comando:

    git clone https://github.com/MarthinKorb/VUTTR

Acesse a *Fake API* no link abaixo. Lá você terá as informações para rodar o serviço.

    https://gitlab.com/bossabox/challenge-fake-api/tree/master

### Vá até o arquivo ***api.ts*** e modifique para:

    import axios from 'axios';

    const api = axios.create({
         baseURL: 'http://localhost:3000',
     });

    export default api;
----------------------------------------------------

Abra o terminal na pasta do projeto e instale as dependências rodando o comando:

    yarn

Agora vamos iniciar nosso front-end:

    yarn start
    

**Feito!** ✔

Agora é só adicionar as suas ferramentas favoritas na lista!

----------------------------------------------------


