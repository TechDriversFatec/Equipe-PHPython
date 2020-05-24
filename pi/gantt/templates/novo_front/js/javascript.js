/*WINDOW.ONLOAD*/


window.onload = carregaGantt;

/*/////////////*/

/*CADASTRO DE PROJETOS*/////////////////////////////

function clicaProjeto(){
    codProjeto = 0;
    codProjetoAtual = 0;
    
    if(vetor_projeto.length > 1){
        codProjeto = vetor_projeto.length;
        document.getElementById("codProjeto").value = codProjeto;
        habilitaRecuoCodProjeto();
        
    }
    else
    {
        document.getElementById("codProjeto").value = codProjeto;
        desabilitaRecuoCodProjeto();
        desabilitaAvancoCodProjeto();
    }
    
    dialogCadastro = document.getElementById("abreCadastroProjeto");
    dialogCadastro.showModal();
    
    
    
     desabilitaBtnCancelarProjeto();
    habilitaBtnNovoProjeto();
    desabilitaBtnGravaProjeto();
    buscaValoresProjeto();
    
    }


function buscaValoresProjeto(){
    
   codAtual = parseInt(document.getElementById("codProjeto").value);
    
    
    
    for(i=0;i<vetor_projeto.length;i++){
        
        if(codAtual == vetor_projeto[i][0]){
        document.getElementById("nomeProjeto").value = vetor_projeto[i][1];
        document.getElementById("escopo").value = vetor_projeto[i][2];
        document.getElementById("dt_inicioProjeto").value = vetor_projeto[i][3];
        document.getElementById("dt_prazoProjeto").value = vetor_projeto[i][4];
        document.getElementById("corProjeto").value = vetor_projeto[i][5];
        }
    }
}

function recuarCodProjeto(){
    document.getElementById("codProjeto").value = vetor_projeto.length -1;
    
   
    habilitaAvancoCodProjeto();
    
    if(document.getElementById("codProjeto").value == 1){
        desabilitaRecuoCodProjeto();
    }
    buscaValoresProjeto();
}

function avancarCodProjeto(){
    codProjetoAtual = parseInt(document.getElementById("codProjeto").value);
    
    codProjetoAtual += 1;
    
    document.getElementById("codProjeto").value = codProjetoAtual;
    
    if(vetor_projeto.length ==  document.getElementById("codProjeto").value){
        desabilitaAvancoCodProjeto();
    }
    habilitaRecuoCodProjeto();
    buscaValoresProjeto();
}

function desabilitaRecuoCodProjeto(){
        document.getElementById("codAnteriorCadasProjeto").disabled = true;
     if(document.getElementById("codAnteriorCadasProjeto").disabled = true){
       mudaBotao =  document.getElementById("codAnteriorCadasProjeto");
        mudaBotao.style.backgroundColor = "gray";
}
    
}

function desabilitaAvancoCodProjeto(){
  document.getElementById("codPosteriorCadasProjeto").disabled = true;
     if(document.getElementById("codPosteriorCadasProjeto").disabled = true){
       mudaBotao =  document.getElementById("codPosteriorCadasProjeto");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaRecuoCodProjeto(){
   
   if(document.getElementById("codProjeto").value > 1){ document.getElementById("codAnteriorCadasProjeto").disabled = false;
    mudaBotao =  document.getElementById("codAnteriorCadasProjeto");
    mudaBotao.style.backgroundColor = "#698FEB";
     
}
}


function habilitaAvancoCodProjeto(){
  document.getElementById("codPosteriorCadasProjeto").disabled = false;
    mudaBotao =  document.getElementById("codPosteriorCadasProjeto");
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

function desabilitaBtnCancelarProjeto(){
    document.getElementById("btn_cancelarCadasProjeto").disabled = true;
     if(document.getElementById("btn_cancelarCadasProjeto").disabled = true){
       mudaBotao =  document.getElementById("btn_cancelarCadasProjeto");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaCamposProjeto(){
     document.getElementById("nomeProjeto").readOnly = false;
    document.getElementById("escopo").readOnly = false;
    document.getElementById("dt_inicioProjeto").readOnly = false;
    document.getElementById("dt_prazoProjeto").readOnly = false;
    
    document.getElementById("corProjeto").disabled = false;
    
    
}

function desabilitaCamposProjeto(){
    limparCamposCadasProjeto();
    document.getElementById("nomeProjeto").readOnly = true;
    document.getElementById("escopo").readOnly = true;
    document.getElementById("dt_inicioProjeto").readOnly = true;
    document.getElementById("dt_prazoProjeto").readOnly = true;  
    document.getElementById("corProjeto").disabled = true;
    
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

function desabilitaBtnGravaProjeto(){
    document.getElementById("btn_salvarprojeto").disabled = true;
    if(document.getElementById("btn_salvarprojeto").disabled = true){
       mudaBotao =  document.getElementById("btn_salvarprojeto");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function habilitaBtnGravarProjeto(){
    document.getElementById("btn_salvarprojeto").disabled = false;
    mudaBotao =  document.getElementById("btn_salvarprojeto");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function limparCamposCadasProjeto(){
    document.getElementById("nomeProjeto").value = '';
    document.getElementById("escopo").value = '';
    document.getElementById("dt_prazoProjeto").value = '';
    document.getElementById("dt_inicioProjeto").value = '';
    
   mudaCor = document.getElementById("corProjeto");
    cor = "#000000";
    
    mudaCor.value = cor.value;
}

vetor_projeto = [];
vetor_tabelaProjeto = [];

function carregaTabela(){
   
    document.getElementById("corpoTabelaProjeto").innerHTML = '';
    
    for(i = 0; i < vetor_tabelaProjeto.length;i++){
         document.getElementById("corpoTabelaProjeto").innerHTML += vetor_tabelaProjeto[i];
        
    }    
    
}

function novoProjeto(){
    
    if(document.getElementById("codProjeto").value == 0){
         codAnterior = parseInt(document.getElementById("codProjeto").value);
    novoCod = codAnterior+1;
    document.getElementById("codProjeto").value = novoCod;
    }
    else{
         document.getElementById("codProjeto").value = vetor_projeto.length+1;
    }
   
    habilitaCamposProjeto();
    habilitaBtnCancelarProjeto();
    desabilitaBtnNovoProjeto();
    habilitaBtnGravarProjeto();
    desabilitaAvancoCodProjeto();
    desabilitaRecuoCodProjeto();
    limparCamposCadasProjeto();
    carregaTabela();
    
}

function cancelarCadasProjeto(){
    document.getElementById("codProjeto").value = vetor_projeto.length;
    
    desabilitaCamposProjeto();
    
    desabilitaBtnGravaProjeto();
    desabilitaBtnCancelarProjeto();
    habilitaRecuoCodProjeto();
    buscaValoresProjeto();
    habilitaBtnNovoProjeto();
    carregaTabela();
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
        
     linhaTabelaProjeto = ["<tr><td>"+codPrj.value+"</td><td>"+nomeProjeto.value+"</td><td>"+dt_inicioProjeto.value+"</td><td>"+ dt_prazoProjeto.value+"</td><td bgcolor="+corProjeto.value+"></td></tr>"];
    
    
    
    vetor_tabelaProjeto.push(linhaTabelaProjeto);
    carregaTabela();
    
    
    
    
    jsonCadastroProjeto();
    
    desabilitaCamposProjeto();
    habilitaBtnNovoProjeto();
    desabilitaBtnGravaProjeto();
    desabilitaBtnCancelarProjeto();
    habilitaRecuoCodProjeto();
    buscaValoresProjeto();
    
        
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

function excluirCadasProjeto(){
    codAtual = parseInt(document.getElementById("codProjeto").value);
    
    for(i = 0; i<vetor_projeto.length;i++){
        
        if(codAtual == vetor_projeto[i][0]){
            
            vetor_projeto.splice([i],5);
            
            vetor_tabelaProjeto.splice([i],1);
            
            
        }
        console.log(vetor_projeto);
    }
    
      carregaTabela();
      document.getElementById("codProjeto").value = vetor_projeto.length;
    buscaValoresProjeto();
      
    
    
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



