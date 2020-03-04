# Requisitos do Projeto

## Funcionais
### CRUD de PESSOAS
* Usuário pode cadastrar uma pessoa com os seguintes campos:
    1. Nome;
    2. Horas Disponíveis;
    3. Salário;
    4. Férias;
    5. Horas/Dia;
    6. Habilidades;
    7. Faltas;
* Usuário pode pesquisar cadastros de pessoas;
* Usuário pode alterar o cadastro de uma pessoa;
* Usuário pode deletar o cadastro de uma pessoa;

### CRUD de TAREFAS
* Usuário pode cadastrar uma tarefa com os seguintes campos:
    1.  Nome;
    2.  data inicial;
    3.  data final;
    4.  prazo;
    5.  horas de desenvolvimento;
    6.  pessoas;
    7.  dependência de outra tarefas;
* Usuário pode pesquisar cadastros de tarefas;
* Usuário pode alterar o cadastro de uma tarefa;
* Usuário pode deletar o cadastro de uma tarefa;

### CRUD de PROJETOS
* Usuário pode cadastrar uma tarefa com os seguintes campos:
    1.  Nome;
    2.  data inicial;
    3.  data final;
    4.  prazo
    5.  horas de desenvolvimento;
    6.  pessoas;
    7.  tarefas;
    8.  é entregavel (verifica se a tarefa é uma entrega de produto);
    9.  custo base;
* Usuário pode pesquisar cadastros de projetos;
* Usuário pode alterar o cadastro de um projeto;
* Usuário pode deletar o cadastro de um projeto;

### Menu Principal 
* O usuário pode acessar a um Menu de Cadastros;
* O usuário pode acessar a Documentação do projeto;
* O usuário pode fazer relatório de pessoas x horas livres;
* O usuário pode verificar a Escala "Nervouser" (horas da pessoa no mesmo projeto);
* O usuário pode fazer relatório de tarefas dependentes;
* O usuário pode fazer relatório de projetos x prazo;
* O usuário pode fazer relatório de projetos x tarefas x horas x prazo x pessoas;
obs: Todos os relatórios podem ser filtrados por dia, semana, mês e ano.

### Gráfico de Gantt
* O gráfico de Gantt deve ter Barras Dinâmicas;
* O gráfico deve permitir a impressão/cópia;
* O gráfico deve permitir subdividir uma tarefa;
* O usuário pode salvar o Estado do gráfico de gantt (Botão de Salvar Estado);
* O usuário deve ser capaz de identificar o(s) desenvolvedore(s) responsáveis pela tarefa;
* O usuário deve ser capaz de filtrar a exibição por Pessoa, Tarefas e/ou Projetos;
* O usuário pode visualizar e modificar o gráfico de Gantt;

## Não Funcionais

### Portatibilidade
Disponibilidade para o nosso projeto significa que podemos rodar nosso sistema em qualquer lugar. 
Por isso escolhemos um sistema WEB, assim, basta que a pessoa tenha uma conexão com a internet e
acesso a um navegador que ela poderá utilizar o sistema.

### Usabilidade
O sistema precisa ser útil! E para isso ele precisa ser "usável", então nos preocupamos desde a
harmonia das cores até a disposição das ferramentas, para que sua utilização seja o mais agradável
possível, bem como, ter o foco no reconhecimento e não na memorização.

### Personalização
As funcões tem o intuito de ser altamente personalizavel, para que ele atenda os problemas e deman-
das dos mais gerais aos mais específicos.

### Disponibilidade
O sistema deve estar disponível para ser acessado a todo momento, por isso vamos fazer o deploy 
em um servidor remoto ( escolhido o da Hostgator), garantindo assim a disponibilidade do serviço.

# Priorização

### CRUD de PESSOAS
* Usuário pode cadastrar uma pessoa com os seguintes campos:
    1. Nome;
    2. Horas Disponíveis;
* Usuário pode pesquisar cadastros de pessoas;
* Usuário pode alterar o cadastro de uma pessoa;
* Usuário pode deletar o cadastro de uma pessoa;
    
### CRUD de TAREFAS
* Usuário pode cadastrar uma tarefa com os seguintes campos:
    1.  Nome;
    2.  data inicial;
    3.  data final;
    4.  prazo;
* Usuário pode pesquisar cadastros de tarefas;
* Usuário pode alterar o cadastro de uma tarefa;
* Usuário pode deletar o cadastro de uma tarefa;

### CRUD de PROJETOS
* Usuário pode cadastrar uma tarefa com os seguintes campos:
    1.  Nome;
    2.  Prazo;
* Usuário pode pesquisar cadastros de projetos;
* Usuário pode alterar o cadastro de um projeto;
* Usuário pode deletar o cadastro de um projeto;

### Gráfico
* Exibir o gráfico de gantt estático;


