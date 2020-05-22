/*POPUP WINDOW*/


/*CADASTRO DE PESSOAS*/
/*function cadastroPessoas(){
popupCadastroProjeto = window.open('', 'Cadastro de Pessoas', "width=250 height=250 left=700 top=280 resizable=false scrollbars=false");
popupCadastroProjeto.document.write ("<!DOCTYPE HTML><html><head><meta charset='utf-8'><title>Cadastro de pessoas</title><link rel='stylesheet' href='css/estilos.css'></head><body><div id='cadastroPessoas'><label for='nomePessoa'>Nome da pessoa: </label><input type='text' id='nomePessoa'><br><label for='contato'>Contato: </label><input type='text' id='contato'><br><button id='btn_gravarpessoa' class='btn_shadow2'>Gravar</button><button id='btn_limpar' class='btn_shadow2'>Limpar</button></div><div id='listaPessoas'><table border=1><thead><caption>Pessoas cadastradas:</caption><tr><th>Nome</th><th>Contato</th></tr></thead><tbody><tr><td>Pedrinho</td><td>(12)99999-9999</td></tr><tr><td>João</td><td>(12)99999-9999</td></tr></tbody></table></div></body> </html>");
}*/

/*
clicaCadastroPessoas = document.getElementById("clicaPessoas");
abreCadastroPessoas = document.getElementById("abreCadastroPessoas")


clicaCadastroPessoas.addEventListener.apply('click', function(){
    abreCadastroPessoas[0].show();                     
                         
});*/


function clicaPessoas(){
    
    dialogCadastro = document.getElementById("abreCadastroPessoas");
    
    document.getElementById("menu_superior").classList.remove("show");
    dialogCadastro.showModal();
}


function gravarPessoa(){
    
    nomePessoa = document.getElementById("nomePessoa");
    contato = document.getElementById("contato");
    
    
    
    divEl = document.createElement("tbody")
    textEl = document.createTextNode("<tr><td>"+nomePessoa.value+"</td><td>"+contato.value+"</td></tr>")
    divEl.appendChild(textEl)

    document.getElementById("listaPessoas").appendChild(divEl)
    
    
    /*
    novoConteudo = document.createTextNode("<tr><td>"+nomePessoa.value+"</td><td>"+contato.value+"</td></tr>");
    document.getElementById("adicionarTabela").appendChild(novoConteudo);
    
    */
    
    
    
    /*selecionatabela = document.getElementById('adicionatabela');
    selecionatabela.innerHTML = "<tr><td>"+nomePessoa.value+"</td><td>"+contato.value+"</td></tr>"*/
    
    /*selecionaTabela = document.querySelector('adicionaTabela');
    
    conteudoNovo = documen.createTextNode("<tr><td>"+nomePessoa.value+"</td><td>"+contato.value+"</td></tr>");
    
    fragment = new DocumentFragment();
    
    fragment.appendChild(conteudoNovo);*/
    
}



/*////////////////////////////////////////*/


////////////////
function expandeTarefas() {
    col_tarefas.innerHTML = col_tarefas.innerHTML + "<button type='button' class='btn_shadow3'>TAREFAS 1</button>";
    
}

function expandePessoas() {
    pessoas_list.innerHTML = pessoas_list.innerHTML + "<label class='styleWord1'>DEV 1</label>"
}

/*MENU DROPDOWN BTN_menusuperior*/////////////////////////////

function menuDropdown_menusuperior() {
  document.getElementById("menu_superior").classList.toggle("show");
}

/*MENU PROJETO DROPDOWN*/

function menuDropdown_prj() {
  document.getElementById("menu_prj").classList.toggle("show");
}

/*MENU TAREFA DROPDOWN*/

function menuDropdown_trf() {
  document.getElementById("menu_trf").classList.toggle("show");
}

/*MENU PESSOAS DROPDOWN*/

function menuDropdown_pessoas() {
  document.getElementById("menu_pessoas").classList.toggle("show");
}

//////////////////////////////////////////////////


/*VISUALIZAÇÃO DO GRÁFICO GANTT*/

function carregaGantt(){
    tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
        {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
         {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
         {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-05-20',
    end: '2020-05-25',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  }
    
]
    
    
    
  gantt = new Gantt("#gantt", tasks);
    
    var gantt = new Gantt("#gantt", tasks, {
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Day',   
    date_format: 'YYYY-MM-DD',
    custom_popup_html: null
});
    
}



window.onload = carregaGantt;