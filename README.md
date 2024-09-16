Sistema Escolar
Um sistema escolar desenvolvido em Node.js usando Express e Handlebars para gerenciamento de alunos e turmas. 
Este projeto oferece funcionalidades completas de CRUD (Criar, Ler, Atualizar, Deletar) para alunos e turmas.

Funcionalidades
Gerenciamento de Alunos:

Listar todos os alunos.
Adicionar novos alunos.
Editar informações de alunos existentes.
Deletar alunos.
Gerenciamento de Turmas:

Listar todas as turmas.
Adicionar novas turmas.
Editar informações de turmas existentes.
Deletar turmas.
Tecnologias
Node.js: Ambiente de execução JavaScript.
Express: Framework para criar aplicações web.
Handlebars: Motor de template para renderizar HTML dinâmico.
Sequelize: ORM para interagir com o banco de dados MySQL.
Bootstrap: Framework CSS para design responsivo.
Estrutura do Projeto
Modelos:

Aluno.js - Definição do modelo para alunos.
Turma.js - Definição do modelo para turmas.
db.js - Configuração da conexão com o banco de dados.
Rotas:

rota_turma.js - Rotas relacionadas às turmas.
rota_aluno.js - Rotas relacionadas aos alunos.
Views:

Páginas para adicionar, editar e listar alunos e turmas.
Layouts e parciais para estruturação das páginas.
Configuração
Clone o repositório:

bash
Copiar código
git clone <URL-do-repositório>
Navegue até o diretório do projeto:

bash
Copiar código
cd nome-do-repositório
Instale as dependências:

bash
Copiar código
npm install
Configure o banco de dados MySQL e ajuste as credenciais no arquivo db.js.

Inicie o servidor:

bash
Copiar código
npm start
Acesse o aplicativo em http://localhost:8081.

Contribuição
Se você deseja contribuir para o projeto, sinta-se à vontade para fazer um fork e criar um pull request. Para relatórios de bugs ou sugestões, abra uma issue no GitHub.

Contato
Desenvolvedor: Cristiano Silveira
Email: cristiano.silveira@fatec.sp.gov.br
