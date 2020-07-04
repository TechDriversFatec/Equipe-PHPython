/**ATENÇÃO!!!!!*/

/**ESTE ARQUIVO JAVASCRIPT FOI PROJETADO PARA TRATAR APENAS GRÁFICO DO GANTT*/




/*JSON PARA CARREGAR GRÁFICO DE GANTT*/
function ganttProjetos(){
      
    vetor_projetoGantt = [];
    xhrGetProjeto = new XMLHttpRequest();
    
    jsonProjetosGantt = '';
    xhrGetProjeto.open('GET', URLGETPROJETOS, true);
    xhrGetProjeto.onreadystatechange = function(){
        if(xhrGetProjeto.readyState == 4){
            if(xhrGetProjeto.status == 200){
                jsonProjetosGantt = (JSON.parse(xhrGetProjeto.responseText)); 

            }else if(xhrGetProjeto.status == 404){

            }
        }      
        carregaGantt(jsonProjetosGantt, null);
        
    }
    xhrGetProjeto.send();
    ganttTarefas();
}

function ganttTarefas(){
    vetor_tarefaGantt = [];
    xhrGetTarefa = new XMLHttpRequest();
    
    jsonTarefasGantt = '';
    xhrGetTarefa.open('GET', URLGETTAREFAS, true);
    xhrGetTarefa.onreadystatechange = function(){
        if(xhrGetTarefa.readyState == 4){
            if(xhrGetTarefa.status == 200){
                jsonTarefasGantt = (JSON.parse(xhrGetTarefa.responseText));           
            }else if(xhrGetTarefa.status == 404){
            }
        }      
        carregaGantt(null, jsonTarefasGantt);
        
    }
    xhrGetTarefa.send();
   
}

function createColorFill(projectId, color) {
    const style = document.createElement("style")
    style.className = "colorFill"
    style.innerHTML = `.tcolor-${projectId} .bar { fill: ${color}}`
    document.head.appendChild(style)
}

function clearColorFill(){
    document.querySelectorAll(".colorFill").forEach(document.head.removeChild)
}

recebe_projetoGantt = [];
recebe_tarefaGantt = []

function carregaGantt(jsonProjetosGantt, jsonTarefasGantt){

        vetor_gantt = [];

        if(jsonProjetosGantt != null){
            recebe_projetoGantt = jsonProjetosGantt;
        }
        if(jsonTarefasGantt != null){
            recebe_tarefaGantt = jsonTarefasGantt;
        }
        
        checked_project = [];
        for(i=0;i<recebe_projetoGantt.length;i++){
            
            if(document.getElementById("cb_prj"+recebe_projetoGantt[i]['prj_id']+"").checked){
                checked_project.push(recebe_projetoGantt[i]['prj_id']);
            }
        }
         
        
        
        

        
        vetor_preparaProjetos = [];
        nomeInterdependencia = '';

        if(recebe_projetoGantt != ''){
            if(recebe_tarefaGantt != ''){
                
       // clearColorFill()
        
        for(i=0; i<recebe_projetoGantt.length;i++){
            for(y=0;y<checked_project.length;y++){
                if(checked_project[y] == recebe_projetoGantt[i]['prj_id']){
            createColorFill(recebe_projetoGantt[i]['prj_id'], recebe_projetoGantt[i]['prj_color'])
            for(x=0;x<recebe_tarefaGantt.length;x++){
                if(recebe_tarefaGantt[x]['trf_id'] == recebe_tarefaGantt[x]['trf_interdependencia']){
                    nomeInterdependencia = recebe_tarefaGantt[x]['trf_name'];
                }

                if(recebe_tarefaGantt[x]['fk_prj_id'] == recebe_projetoGantt[i]['prj_id']){
                    
                    linha = [recebe_tarefaGantt[x]['trf_id'], recebe_tarefaGantt[x]['trf_name'],recebe_tarefaGantt[x]['trf_datainicial'], recebe_tarefaGantt[x]['trf_datafinal'], recebe_tarefaGantt[x]['trf_interdependencia'] ];
                    vetor_preparaProjetos.push(linha);
                }
            }
        }
        }
    }
    if(vetor_preparaProjetos != ''){
        tasks = []; //CRIA VETOR PARA RECEBER JSON
    
        for(i = 0; i< vetor_preparaProjetos.length;i++){ //FAZ A VARREDURA NO VETOR PARA CRIAR JSON
            tasks.push({ //CARREGA O JSON COM AS INFORMAÇÕES NECESSÁRIAS PARA CARREGAR O GRÁFICO GANTT
                'id': 'Task'+vetor_preparaProjetos[i][0],
                'name': vetor_preparaProjetos[i][1],
                'start': vetor_preparaProjetos[i][2],
                'end': vetor_preparaProjetos[i][3],
                'dependencies': 'Task'+vetor_preparaProjetos[i][4],
                'progress': 20,       
                'custom_class': 'tcolor-'+vetor_preparaProjetos[i][0]                     
            });

        }
        //console.log("TASKS: "+tasks+""); //TESTE DE INTEGRIDADE
         gantt = new Gantt('#gantt', tasks, {
            on_click: function (task) {
                console.log(task);
            },
            on_date_change: function(task, start, end) {
                console.log(recebe_tarefaGantt)
                console.log(task, start, end);
                const trf_id = parseInt(task.id.replace("Task",""))
                const tarefa = recebe_tarefaGantt.filter(_ => _.trf_id == trf_id)[0]
                tarefa.trf_datainicial = start.toISOString().split("T")[0]
                tarefa.trf_datafinal = end.toISOString().split("T")[0]
                putAtualizaTarefa(tarefa)
                /*
                JSON.stringify({
                    "trf_id": codTarefa,
                    "trf_name": nomeTarefa,
                    "trf_datainicial": dt_inicioTarefa,
                    "trf_datafinal": dt_finalTarefa,
                    "trf_prazo": dt_prazoTarefa,
                    "trf_interdependencia": cod_interdependencia_datalist,
                    "trf_entregavel": entregavel,
                    "trf_progresso": progressotarefa,
                    "trf_color": "#000000",
                    "fk_prj_id": cod_pessoa_datalist
                }
                */
                
            },
            on_progress_change: function(task, progress) {
                console.log(task, progress);
            },
            on_view_change: function(mode) {
                console.log(mode);
            }
        });
       

    }

        }
}
}
/*MUDANÇA DE PREÍODOS GANTT*/

// Quarter Day, Half Day, Day, Week, Month 


function periodo_dia(){
    gantt = new Gantt('#gantt', tasks);
    gantt.change_view_mode('Day'); // MUDANÇA DE PERÍODO PARA DIA
}

function periodo_semana(){
    gantt = new Gantt('#gantt', tasks);
    gantt.change_view_mode('Week');// MUDANÇA DE PERÍODO PARA SEMANA
}

function periodo_mes(){
    gantt = new Gantt('#gantt', tasks);
    gantt.change_view_mode('Month');// MUDANÇA DE PERÍODO PARA MÊS
}

function periodo_ano(){
    gantt = new Gantt('#gantt', tasks);
    gantt.change_view_mode('Year');// MUDANÇA DE PERÍODO PARA ANO
}



/*//////////////////////////////////////////////*/

