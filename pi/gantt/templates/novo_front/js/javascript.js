/*WINDOW.ONLOAD*/


window.onload = carregaGantt;

/*/////////////*/

/*CADASTRO DE PROJETOS*/////////////////////////////

function clicaProjeto(){
    codProjeto = 0;
    dialogCadastro = document.getElementById("abreCadastroProjeto");
    dialogCadastro.showModal();
    document.getElementById("codProjeto").value = codProjeto;
    document.getElementById("btn_cancelarCadasProjeto").disabled = true;
     if(document.getElementById("btn_cancelarCadasProjeto").disabled = true){
       mudaBotao =  document.getElementById("btn_cancelarCadasProjeto");
        mudaBotao.style.backgroundColor = "gray";
    }
    document.getElementById("btn_novoprojeto").disabled = false;
    mudaBotao =  document.getElementById("btn_novoprojeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function fecharCadastroProjeto(){
    dialogCadastro.close();
    limparCadasProjeto();
}

function habilitaBtnCancelarProjeto(){
    document.getElementById("btn_cancelarCadasProjeto").disabled = false;
    mudaBotao =  document.getElementById("btn_cancelarCadasProjeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function habilitaCamposProjeto(){
     document.getElementById("nomeProjeto").readOnly = false;
    document.getElementById("escopo").readOnly = false;
    document.getElementById("dt_inicioProjeto").readOnly = false;
    document.getElementById("dt_prazoProjeto").readOnly = false;
    document.getElementById("corProjeto").hidden = false;
}

function desabilitaCamposProjeto(){
    document.getElementById('nomeProjeto').value = '';
    document.getElementById('escopo').value = '';
    document.getElementById('dt_inicioProjeto').value = '';
    document.getElementById('dt_prazoProjeto').value = '';
    document.getElementById('corProjeto').disabled = true;
    document.getElementById("nomeProjeto").readOnly = true;
    document.getElementById("escopo").readOnly = true;
    document.getElementById("dt_inicioProjeto").readOnly = true;
    document.getElementById("dt_prazoProjeto").readOnly = true;
    document.getElementById("corProjeto").hidden = true;
}

function habilitaBtnNovoProjeto(){
     document.getElementById("btn_novoprojeto").disabled = false;
    mudaBotao =  document.getElementById("btn_novoprojeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnNovoProjeto(){
    document.getElementById("btn_novoprojeto").disabled = true;
    if(document.getElementById("btn_novoprojeto").disabled = true){
       mudaBotao =  document.getElementById("btn_novoprojeto");
        mudaBotao.style.backgroundColor = "gray";
    }
}


vetor_projeto = [];



function novoProjeto(){
    codAnterior = parseInt(document.getElementById("codProjeto").value);
    novoCod = codAnterior+1;
    document.getElementById("codProjeto").value = novoCod;
    habilitaCamposProjeto();
    habilitaBtnCancelarProjeto();
    desabilitaBtnNovoProjeto();
    
}

function cancelarCadasProjeto(){
    document.getElementById("codProjeto").value = vetor_projeto.length;
    
    desabilitaCamposProjeto();
    habilitaBtnNovoProjeto();
 }

function gravarProjeto(){
    
    codPrj = document.getElementById("codProjeto");
    nomeProjeto = document.getElementById("nomeProjeto");
    escopo = document.getElementById("escopo");
    dt_inicioProjeto = document.getElementById("dt_inicioProjeto");
    dt_prazoProjeto = document.getElementById("dt_prazoProjeto");
    corProjeto = document.getElementById("corProjeto");
    
    projeto = [codPrj.value,nomeProjeto.value, escopo.value, dt_inicioProjeto.value, dt_prazoProjeto.value, corProjeto.value];
    
    vetor_projeto.push(projeto);
        
    linhaTabelaProjeto = "<tr draggable=true><td>"+nomeProjeto.value+"</td><td>"+dt_inicioProjeto.value+"</td><td>"+dt_prazoProjeto.value+"</td><td bgcolor="+corProjeto.value+"></td></tr>";
    
   
    
    document.getElementById("corpoTabelaProjeto").innerHTML += linhaTabelaProjeto;
    
    
    jsonCadastroProjeto();
    
    desabilitaCamposProjeto();
    habilitaBtnNovoProjeto();
    
    
}

function jsonCadastroProjeto(){
    jsonProjeto= [];
    for(i=0;i<vetor_projeto.length;i++){
        jsonProjeto.push({
            'codPrj': vetor_projeto[i][0],
            'nomeProjeto': vetor_projeto[i][1],
            'escopo': vetor_projeto[i][2],
            'dt_inicioProjeto': vetor_projeto[i][3],
            'dt_prazoProjeto': vetor_projeto[i][4],
            'corProjeto': vetor_projeto[i][5]
        });
    }
    console.log(jsonProjeto);
}



/*///////////////////////////////////////*/


/*CADASTRO DE PESSOAS*///////////////////////////////


function fecharCadastroPessoa(){
    dialogCadastro.close();
    limparCadasPessoa();
}

function limparCadasPessoa(){
    document.getElementById('nomePessoa').value = '';
    document.getElementById('contato').value = '';
}

function clicaPessoas(){
    
    dialogCadastro = document.getElementById("abreCadastroPessoas");
    
    document.getElementById("menu_superior").classList.remove("show");
    dialogCadastro.showModal();
}

vetor_pessoa = [];


function gravarPessoa(){
    
  
   document.getElementById("nomePessoa");
    contato = document.getElementById("contato");
    
    pessoa = [nomePessoa.value,contato.value];
     
    
    vetor_pessoa.push(pessoa);
    
    linhaTabelaPessoas = "<tr><td>"+nomePessoa.value+"</td><td>"+contato.value+"</td></tr>";
    
    document.getElementById("corpoTabelaPessoas").innerHTML += linhaTabelaPessoas;
    
    
}

function jsonCadastroPessoa(){
    jsonPessoas = [];
    for(i=0;i<vetor_pessoa.length;i++){
        jsonPessoas.push({
            'nomePessoa': vetor_pessoa[i][0],
            'contato': vetor_pessoa[i][1]
        });
    }
    console.log(jsonPessoas);
}


/*/////////////////////////////////////////////////*/



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
    
  document.getElementById("menu_prj").classList.remove("show");
  document.getElementById("menu_trf").classList.remove("show");
 
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



