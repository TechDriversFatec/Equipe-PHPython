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
        
        

        
        vetor_preparaProjetos = [];
        nomeInterdependencia = '';

        if(recebe_projetoGantt != ''){
            if(recebe_tarefaGantt != ''){
                

        for(i=0; i<recebe_projetoGantt.length;i++){
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
        tasks = []; //CRIA VETOR PARA RECEBER JSON
    
        for(i = 0; i< vetor_preparaProjetos.length;i++){ //FAZ A VARREDURA NO VETOR PARA CRIAR JSON
            tasks.push({ //CARREGA O JSON COM AS INFORMAÇÕES NECESSÁRIAS PARA CARREGAR O GRÁFICO GANTT
                'id': 'Task'+vetor_preparaProjetos[i][0],
                'name': vetor_preparaProjetos[i][1],
                'start': vetor_preparaProjetos[i][2],
                'end': vetor_preparaProjetos[i][3],
                'dependencies': 'Task'+vetor_preparaProjetos[i][4],
                'progress': 20,       
                'custom_class': 'tcolor'                     
            });
        }
        //console.log("TASKS: "+tasks+""); //TESTE DE INTEGRIDADE
       gantt = new Gantt("#gantt", tasks); //ENVIO DE DADOS PARA O GRÁFICO GANTT

    }

        }
}

/*MUDANÇA DE PREÍODOS GANTT*/

// Quarter Day, Half Day, Day, Week, Month 


function periodo_dia(){
    
    gantt.change_view_mode('Day'); // MUDANÇA DE PERÍODO PARA DIA
}

function periodo_semana(){
    gantt.change_view_mode('Week');// MUDANÇA DE PERÍODO PARA SEMANA
}

function periodo_mes(){
    gantt.change_view_mode('Month');// MUDANÇA DE PERÍODO PARA MÊS
}

function periodo_ano(){
    gantt.change_view_mode('Year');// MUDANÇA DE PERÍODO PARA ANO
}



/*//////////////////////////////////////////////*/

