/**ATENÇÃO!!!!!*/

/**ESTE ARQUIVO JAVASCRIPT FOI PROJETADO PARA TRATAR APENAS CADASTRO DE DISTRIBUICAO DE PESSOAS 
 * EM PROJETOS
*/



/*DISTRIBUIÇÃO DE PESSOAS AOS PROJETOS*///////////////////////////////

/*GET AND POST - API*////////////////////////////////////////////////////////////////////

////DATALIST////////////////////////////////////////////

function dt_projetos_distribuicao(){
    document.getElementById('listaTarefa').value = '';

    xhr_dt_projetos_distribuicao = new XMLHttpRequest();
    vetor_dt_projetos_distribuicao = [];
    xhr_dt_projetos_distribuicao.open("GET", URLGETPROJETOS, true);
    xhr_dt_projetos_distribuicao.onreadystatechange = function(){
        if(xhr_dt_projetos_distribuicao.readyState == 4){
            if(xhr_dt_projetos_distribuicao.status == 200){
               json = JSON.parse(xhr_dt_projetos_distribuicao.responseText);     
               document.getElementById("listaProjetos_distribuicao").innerHTML = '';
                for(i = 0; i<json.length; i++){
                    document.getElementById("listaProjetos_distribuicao").innerHTML += "<option value='"+json[i]['prj_nome']+"'>";
                    
                    linha = [json[i]['prj_id'], json[i]['prj_nome']];
                    vetor_dt_projetos_distribuicao.push(linha);
                    
                    
                }
                outputDatalistProjetos(vetor_dt_projetos_distribuicao);
                
                
               
        }else if(xhr_dt_projetos_distribuicao.status == 404){}
    }
}
xhr_dt_projetos_distribuicao.send();
    
    }




function outputDatalistProjetos(vetor_dt_projetos_distribuicao)
{
    
    nomeprojeto = document.getElementById("selecionaProjeto_distribuicao").value;
    
    for(i = 0; i<vetor_dt_projetos_distribuicao.length;i++){
        
        if(nomeprojeto == vetor_dt_projetos_distribuicao[i][1]){
            
            document.getElementById("id_prjDistr").innerHTML = ""+vetor_dt_projetos_distribuicao[i][0]+"";
        }

    }
    
    dt_tarefas_distribuicao();
    
}

function dt_tarefas_distribuicao(){
    
xhr_dt_tarefas_distribuicao = new XMLHttpRequest();
vetor_tarefas_distr = [];
xhr_dt_tarefas_distribuicao.open("GET", URLGETTAREFAS, true);
xhr_dt_tarefas_distribuicao.onreadystatechange = function(){
    if(xhr_dt_tarefas_distribuicao.readyState == 4){
        if(xhr_dt_tarefas_distribuicao.status == 200){
           json = JSON.parse(xhr_dt_tarefas_distribuicao.responseText);     
           
            for(i = 0; i<json.length; i++){
               
                linha = [json[i]['fk_prj_id'],json[i]['trf_id'], json[i]['trf_name']];
                vetor_tarefas_distr.push(linha);
                
                
            }

                id_prjDistr = document.getElementById("id_prjDistr").innerHTML;
                
                //nomeInterdependencia = document.getElementById("interdependencia").value;
                document.getElementById("listaTarefa_distribuicao").innerHTML = '';
                for(i = 0; i<vetor_tarefas_distr.length;i++){
                    
                        if(id_prjDistr == vetor_tarefas_distr[i][0]){
                            
                            document.getElementById("listaTarefa_distribuicao").innerHTML += "<option value='"+vetor_tarefas_distr[i][2]+"'>";
                            //console.log("<option value='"+vetor_tarefas_distr[i][2]+"'>");
                        }                           
                }
                nome_tarefa = document.getElementById("listaTarefa").value;
                
                for(i = 0; i<vetor_tarefas_distr.length;i++){                  
                        
                    if(nome_tarefa == vetor_tarefas_distr[i][2]){
                       
                        document.getElementById("id_trfDistr").innerHTML = ""+vetor_tarefas_distr[i][1]+"";
                    }               
                        
            }

               
            
         
           
           
    }else if(xhr_dt_tarefas_distribuicao.status == 404){}
}
}
xhr_dt_tarefas_distribuicao.send();

}


function dt_pessoas_distribuicao(){
    

    xhr_dt_pessoas_distribuicao = new XMLHttpRequest();
    
    document.getElementById("listaPessoa_distribuicao").innerHTML = '';
    xhr_dt_pessoas_distribuicao.open("GET", URLGETPESSOAS, true);
    xhr_dt_pessoas_distribuicao.onreadystatechange = function(){
        if(xhr_dt_pessoas_distribuicao.readyState == 4){
            if(xhr_dt_pessoas_distribuicao.status == 200){
               json = JSON.parse(xhr_dt_pessoas_distribuicao.responseText);     
               
                for(i = 0; i<json.length; i++){
                    document.getElementById("listaPessoa_distribuicao").innerHTML += "<option value='"+json[i]['pes_nome']+"'>";                  
                }

                nome_pessoa = document.getElementById("listaPessoa").value;
               
                for(i = 0; i<json.length;i++){
                    if(nome_pessoa == json[i]['pes_nome']){                      
                        document.getElementById("id_pesDistr").innerHTML = ""+json[i]['pes_id']+"";
                    } 
                }
                
       }else if(xhr_dt_pessoas_distribuicao.status == 404){}
    }
    }
    xhr_dt_pessoas_distribuicao.send();
    
    }





////DATALIST////////////////////////////////////////////


///CÓDIGO DO PROJETO RECUPERADO A PARTIR DO GETALLTASKS_DISTRIBUICAO
function getNomeProjeto_Distribuicao(codProjeto){

    document.getElementById("id_prjDistr").innerHTML = codProjeto;
    xhrgetNomeProjeto_Distribuicao = new XMLHttpRequest();
    xhrgetNomeProjeto_Distribuicao.open('GET', URLGETPROJETOS, true);
    
    xhrgetNomeProjeto_Distribuicao.onreadystatechange = function(){
        if(xhrgetNomeProjeto_Distribuicao.readyState == 4){
            if(xhrgetNomeProjeto_Distribuicao.status == 200){
                json_projetos_distribuicao = JSON.parse(xhrgetNomeProjeto_Distribuicao.responseText);
                 
                id_prjDistr = document.getElementById("id_prjDistr").innerHTML;
                for(i =0; i<json_projetos_distribuicao.length;i++){
                    if(id_prjDistr == json_projetos_distribuicao[i]['prj_id']){
                        document.getElementById("selecionaProjeto_distribuicao").value = json_projetos_distribuicao[i]['prj_nome'];
                             
                    }
                }
            
                carregaTabelaDistribuicao(null, null, json_projetos_distribuicao);
            }else if(xhrgetNomeProjeto_Distribuicao.status == 404){}
        }      
    }
    xhrgetNomeProjeto_Distribuicao.send();
    
}

function getAllTasks_Distribuicao(){
    xhrgetAllTasks_Distribuicao = new XMLHttpRequest();
    
    xhrgetAllTasks_Distribuicao.open('GET', URLGETTAREFAS, true);
    
    xhrgetAllTasks_Distribuicao.onreadystatechange = function(){
        if(xhrgetAllTasks_Distribuicao.readyState == 4){
            if(xhrgetAllTasks_Distribuicao.status == 200){
                
                json_tarefas_distribuicao = JSON.parse(xhrgetAllTasks_Distribuicao.responseText); 

                id_trfDistr = document.getElementById("id_trfDistr").innerHTML;
                        
                carregaTabelaDistribuicao(null, json_tarefas_distribuicao, null);
                for(i=0;i<json_tarefas_distribuicao.length;i++){
                    

                    if(json_tarefas_distribuicao[i]['trf_id'] == id_trfDistr){
                       // console.log(json_tarefas_distribuicao[i]['trf_name']);
                    document.getElementById("listaTarefa").value = json_tarefas_distribuicao[i]['trf_name'];

                    //EXPORTANDO CODPROJETO PARA GETNOMEPROJETO_DISTRIBUICAO
                    codProjeto = json_tarefas_distribuicao[i]['fk_prj_id'];
                    getNomeProjeto_Distribuicao(codProjeto);
                    
                
                    }else if(id_trfDistr == 0){
                        document.getElementById("listaTarefa").value = '';
                    }

                    
                }

                

            }else if(xhrgetAllTasks_Distribuicao.status == 404){

            }
        }  
       
    }
    xhrgetAllTasks_Distribuicao.send();
}

function getAllPeople_distribuicao(){
    xhr_get_all_people_distribuicao = new XMLHttpRequest();
    xhr_get_all_people_distribuicao.open('GET', URLGETPESSOAS, true);
    id_pesDistr = document.getElementById("id_pesDistr").innerHTML;
    console.log(id_pesDistr);
    xhr_get_all_people_distribuicao.onreadystatechange = function(){
    if(xhr_get_all_people_distribuicao.readyState == 4){
        if(xhr_get_all_people_distribuicao.status == 200){
            
            json_people_distribuicao = JSON.parse(xhr_get_all_people_distribuicao.responseText); 
            carregaTabelaDistribuicao(json_people_distribuicao, null, null);
            for(i=0;i<json_people_distribuicao.length;i++){
                
               
                if(json_people_distribuicao[i]['pes_id'] == id_pesDistr){
                   // console.log(json_people_distribuicao[i]['trf_name']);
                document.getElementById("listaPessoa").value = json_people_distribuicao[i]['pes_nome'];
                }else if(id_pesDistr == 0){
                    document.getElementById("listaPessoa").value = '';
                }
            }
           
        }else if(xhr_get_all_people_distribuicao.status == 404){

        }
    }  
   
    }
xhr_get_all_people_distribuicao.send();

}



function getDistribuicao(){
   codDistribuicao = document.getElementById('codDistribuicao').value;
    if(codDistribuicao == "undefined"){
        document.getElementById("codDistribuicao").value = 0;
        limparCamposCadasDistribuicao();
        desabilitaAvancoCodDistribuicao();
        desabilitaBtnAtualizarDistribuicao();
        desabilitaBtnCancelarDistribuicao();
        desabilitaBtnGravaDistribuicao();
        desabilitaBtnExcluirDistribuicao();
        desabilitaCamposDistribuicao();
        desabilitaRecuoCodDistribuicao();

    }else{
        xhrGetDistribuicao = new XMLHttpRequest();
    
        xhrGetDistribuicao.open('GET', URLGETDISTRIBUICAO+codDistribuicao+'/', true);
            vetor_distribuicao = [];
            xhrGetDistribuicao.onreadystatechange = function(){
                if(xhrGetDistribuicao.readyState == 4){
                    if(xhrGetDistribuicao.status == 200){
                          
                        json_distribuicao = JSON.parse(xhrGetDistribuicao.responseText);
                        
                        document.getElementById("id_trfDistr").innerHTML = ""+json_distribuicao['fk_trf_id']+"";
                        document.getElementById("id_pesDistr").innerHTML = ""+json_distribuicao['fk_pes_id']+"";
                         
                        getAllTasks_Distribuicao();
                        getAllPeople_distribuicao();
                        carregaTabelaDistribuicao();
                        
                        
                        
                    }else if(xhrGetDistribuicao.status == 404){}

                    
                }
                
             
                
            }
            xhrGetDistribuicao.send();
    
    }
}

function postDistribuicao(){
   codPesTrf = document.getElementById('codDistribuicao').value;
   codTarefaDistr = document.getElementById('id_trfDistr').innerHTML;
   codPessoaDistr = document.getElementById('id_pesDistr').innerHTML;
   
   
  
    xhrPostDistribuicao = new XMLHttpRequest();
    xhrPostDistribuicao.open("POST", URLGETDISTRIBUICAO, true);
    xhrPostDistribuicao.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrPostDistribuicao.setRequestHeader("X-CSRFToken", csrftoken)
    xhrPostDistribuicao.setRequestHeader("withCredentials", 'True');

    xhrPostDistribuicao.onload = function(){
        if(xhrPostDistribuicao.readyState == 4){
            if(xhrPostDistribuicao.status == 201){
                
                getDistribuicao();
                desabilitaCamposDistribuicao();
                habilitaBtnNovaDistribuicao();
                desabilitaBtnGravaDistribuicao();
                desabilitaBtnCancelarDistribuicao();
                habilitaRecuoCodDistribuicao();
                habilitaBtnExcluirDistribuicao();
                habilitaBtnAtualizarDistribuicao();   
               
            }else if(xhrPostDistribuicao.status == 400){
                limparCamposCadasDistribuicao();
                habilitaCamposDistribuicao();
                habilitaBtnGravarDistribuicao();
                habilitaBtnCancelarDistribuicao();
                desabilitaBtnExcluirDistribuicao();
                desabilitaRecuoCodDistribuicao();
                
            }
        }
    

    }
    xhrPostDistribuicao.send(JSON.stringify({
         'pes_trf_id': codPesTrf,
         'fk_pes_id': codPessoaDistr,
         'fk_trf_id': codTarefaDistr       
        }));
         
       
}

function putDistribuicao(){
    if(document.getElementById("selecionaProjeto_distribuicao").disabled == true){
        habilitaCamposDistribuicao();
        mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
        mudaBotao.style.backgroundColor = "green";

    }else{
        codPesTrf = document.getElementById('codDistribuicao').value;
        codTarefaDistr = document.getElementById('id_trfDistr').innerHTML;
        codPessoaDistr = document.getElementById('id_pesDistr').innerHTML;
        
            
        xhrPutDistribuicao = new XMLHttpRequest();
    
        xhrPutDistribuicao.open("PUT", URLGETDISTRIBUICAO+codDistribuicao+'/', true);
        xhrPutDistribuicao.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhrPutDistribuicao.setRequestHeader("X-CSRFToken", csrftoken);
        xhrPutDistribuicao.setRequestHeader("withCredentials", 'True');
        xhrPutDistribuicao.onload = function(){
            if(xhrPutDistribuicao.readyState == 4){
                if(xhrPutDistribuicao.status == 200){
                    
                    getDistribuicao();
               }
            }
     }
        xhrPutDistribuicao.send(JSON.stringify({
            'pes_trf_id': codPesTrf,
            'fk_pes_id': codPessoaDistr,
            'fk_trf_id': codTarefaDistr 
        }));

        mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
        
        desabilitaCamposDistribuicao();
    
    }

    
}

function deleteDistribuicao(){
    recuarCodDistribuicao();
    codPesTrf = document.getElementById('codDistribuicao').value;

    xhrDeleteDistribuicao = new XMLHttpRequest();
    xhrDeleteDistribuicao.open("DELETE", URLGETDISTRIBUICAO+codPesTrf, true);
    xhrDeleteDistribuicao.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhrDeleteDistribuicao.setRequestHeader("X-CSRFToken", csrftoken);
    xhrDeleteDistribuicao.setRequestHeader("withCredentials", 'True');
    xhrDeleteDistribuicao.send(); 
    
}
///////////////////////FINISH: GET - POST - PUT - DELETE //////////////////////////////////////////////////////////





/*CADASTRO DE DISTRIBUICAO DE PESSOAS EM TAREFAS*/////////////////////////////

function clicaDistribuicao(){
    dialogCadastro = document.getElementById("distribuiPessoas");
    dialogPolyfill.registerDialog(dialogCadastro);
    dialogCadastro.showModal();

    xhrAbreDistribuicao = new XMLHttpRequest();
    xhrAbreDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    xhrAbreDistribuicao.onreadystatechange = function(){
        
        maiorvalor = 0;
        if(xhrAbreDistribuicao.readyState == 4){
            if(xhrAbreDistribuicao.status == 200){
                json = (JSON.parse(xhrAbreDistribuicao.responseText));

                for(i = 0; i<json.length;i++){
                   if(json[i]['pes_trf_id'] > maiorvalor ){
                        maiorvalor = json[i]['pes_trf_id'];
                    }              
                }
                if(maiorvalor == 0){
                    document.getElementById("codDistribuicao").value = 0;
                    limparCamposCadasDistribuicao();
                    desabilitaAvancoCodDistribuicao();
                    desabilitaBtnAtualizarDistribuicao();
                    desabilitaBtnCancelarDistribuicao();
                    desabilitaBtnGravaDistribuicao();
                    desabilitaBtnExcluirDistribuicao();
                    habilitaBtnNovaDistribuicao();
                    desabilitaCamposDistribuicao();
                    desabilitaRecuoCodDistribuicao();
                }else{
                    document.getElementById("codDistribuicao").value = maiorvalor;
                    getDistribuicao();
                    habilitaRecuoCodDistribuicao();
                    
                }

            }else if(xhrAbreDistribuicao.status == 404){}

            
        }
        
    }
    xhrAbreDistribuicao.send();
    
    dt_projetos_distribuicao();
  
    habilitaAvancoCodDistribuicao();
    habilitaRecuoCodDistribuicao();
    desabilitaBtnCancelarDistribuicao();
    habilitaBtnNovaDistribuicao();
    desabilitaBtnGravaDistribuicao();
    desabilitaAvancoCodDistribuicao();
    carregaTabelaDistribuicao();
}

function novaDistribuicao(){
    
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    
    if(codDistribuicao == 0){
        codDistribuicao = 1;
        document.getElementById("codDistribuicao").value = codDistribuicao;
    }else{
    vetor_distribuicao = [];
    xhrNovaDistribuicao = new XMLHttpRequest();
    xhrNovaDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    
    xhrNovaDistribuicao.onreadystatechange = function(){     
        if(xhrNovaDistribuicao.readyState == 4){
            
            if(xhrNovaDistribuicao.status == 200){
                json = (JSON.parse(xhrNovaDistribuicao.responseText));
                
                for(i = 0;i<json.length;i++){
                    vetor_distribuicao.push(json[i]['pes_trf_id']);
                    
                }
                vetor_distribuicao.reverse();
                
                codDistribuicao = vetor_distribuicao[0] + 1;
              }
        }
        document.getElementById("codDistribuicao").value = codDistribuicao;
    }
    xhrNovaDistribuicao.send();
}

habilitaCamposDistribuicao();
habilitaBtnCancelarDistribuicao();
desabilitaBtnNovaDistribuicao();
habilitaBtnGravarDistribuicao();
desabilitaAvancoCodDistribuicao();
desabilitaRecuoCodDistribuicao();
limparCamposCadasDistribuicao();
desabilitaBtnExcluirDistribuicao();
desabilitaBtnAtualizarDistribuicao();



}

function cancelarCadasDistribuicao(){
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    document.getElementById("codDistribuicao").value = codDistribuicao - 1;
    
    desabilitaCamposDistribuicao();
    limparCamposCadasDistribuicao();   
    desabilitaBtnGravaDistribuicao();
    desabilitaBtnCancelarDistribuicao();
    habilitaRecuoCodDistribuicao();
    getDistribuicao();
    habilitaBtnNovaDistribuicao();
    habilitaBtnExcluirDistribuicao();
    habilitaBtnAtualizarDistribuicao();

   
   
}

/*


function carregaDataListInterdepedencia(){
    
     document.getElementById("listaInterdependencia").innerHTML = '';
    
    if(vetor_tarefa.length == 0){
        document.getElementById("listaInterdependencia").innerHTML += "<option value=' '>";
    }
    for(i =0; i< vetor_tarefa.length;i++){
        
        document.getElementById("listaInterdependencia").innerHTML += "<option value='"+vetor_tarefa[i][1]+"'>";
        
        
    }
    
    
}*/


function recuarCodDistribuicao(){
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    
    vetor_distribuicao = [];
    xhrRecuarCodDistribuicao = new XMLHttpRequest();
    xhrRecuarCodDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    xhrRecuarCodDistribuicao.onreadystatechange = function(){     
        if(xhrRecuarCodDistribuicao.readyState == 4){
            if(xhrRecuarCodDistribuicao.status == 200){
                json = (JSON.parse(xhrRecuarCodDistribuicao.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_distribuicao.push(json[i]['pes_trf_id']);
                    
                }
                 
                 menorvalor = vetor_distribuicao.length;
                 for(i=0;i<vetor_distribuicao.length;i++){

                    if(codDistribuicao == vetor_distribuicao[i]){
                        codDistribuicao = vetor_distribuicao[i-1];
                 }
                 if(vetor_distribuicao[i] < menorvalor){
                    menorvalor = vetor_distribuicao[i]; 
                }    

                }
                document.getElementById("codDistribuicao").value = codDistribuicao;   
                if(codDistribuicao == menorvalor){
                    desabilitaRecuoCodDistribuicao();
                }
                habilitaAvancoCodDistribuicao();
                getDistribuicao();
                }else if(xhrRecuarCodDistribuicao.status == 404){}
            }
        }
    

        xhrRecuarCodDistribuicao.send();
        

}

function avancarCodDistribuicao(){
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    vetor_distribuicao = [];
    xhrAvancarDistribuicao = new XMLHttpRequest();
    xhrAvancarDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    xhrAvancarDistribuicao.onreadystatechange = function(){     
        if(xhrAvancarDistribuicao.readyState == 4){
            if(xhrAvancarDistribuicao.status == 200){
                json = (JSON.parse(xhrAvancarDistribuicao.responseText));
                for(i = 0;i<json.length;i++){
                    vetor_distribuicao.push(json[i]['pes_trf_id']);
                    
                }
                
                vetor_distribuicao.reverse();
                 maiorvalor = 0;
                 for(i=0;i<vetor_distribuicao.length;i++){
                    
                    if(codDistribuicao == vetor_distribuicao[i]){
                        codDistribuicao = vetor_distribuicao[i-1];
                 }
                 if(vetor_distribuicao[i] > maiorvalor){
                    maiorvalor = vetor_distribuicao[i]; 
                }    

                }
                   
                      document.getElementById("codDistribuicao").value = codDistribuicao;   
                if(codDistribuicao == maiorvalor){
                    desabilitaAvancoCodDistribuicao();
                }
                habilitaRecuoCodDistribuicao();
                getDistribuicao();
                }else if(xhrAvancarDistribuicao.status == 404){}
            }
        }
    
        
        xhrAvancarDistribuicao.send();
}



function desabilitaRecuoCodDistribuicao(){
        document.getElementById("codAnteriorDistribuicao").disabled = true;
     if(document.getElementById("codAnteriorDistribuicao").disabled = true){
       mudaBotao =  document.getElementById("codAnteriorDistribuicao");
        mudaBotao.style.backgroundColor = "gray";
}
    
}

function desabilitaAvancoCodDistribuicao(){
  document.getElementById("codPosteriorDistribuicao").disabled = true;
     if(document.getElementById("codPosteriorDistribuicao").disabled = true){
       mudaBotao =  document.getElementById("codPosteriorDistribuicao");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaRecuoCodDistribuicao(){
   
   if(document.getElementById("codDistribuicao").value > 1){ document.getElementById("codAnteriorDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("codAnteriorDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
     
}
}

function habilitaAvancoCodDistribuicao(){
  document.getElementById("codPosteriorDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("codPosteriorDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
}

function fecharCadastroDistribuicao(){
    dialogCadastro.close();
    limparCamposCadasDistribuicao();
    mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
    mudaBotao.style.backgroundColor = "#698FEB";
    

}

function habilitaBtnCancelarDistribuicao(){
    document.getElementById("btn_cancelarCadasDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_cancelarCadasDistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnCancelarDistribuicao(){
    document.getElementById("btn_cancelarCadasDistribuicao").disabled = true;
     if(document.getElementById("btn_cancelarCadasDistribuicao").disabled = true){
       mudaBotao =  document.getElementById("btn_cancelarCadasDistribuicao");
        mudaBotao.style.backgroundColor = "gray";
}
}

function habilitaCamposDistribuicao(){
     document.getElementById("selecionaProjeto_distribuicao").disabled = false;
    document.getElementById("listaTarefa").disabled = false;   
    document.getElementById("listaPessoa").disabled = false;
}

function desabilitaCamposDistribuicao(){
    
    document.getElementById("selecionaProjeto_distribuicao").disabled = true;
    document.getElementById("listaTarefa").disabled = true;   
    document.getElementById("listaPessoa").disabled = true;
}

function habilitaBtnNovaDistribuicao(){
     document.getElementById("btn_novadistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_novadistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function desabilitaBtnNovaDistribuicao(){
    document.getElementById("btn_novadistribuicao").disabled = true;
    if(document.getElementById("btn_novadistribuicao").disabled = true){
       mudaBotao =  document.getElementById("btn_novadistribuicao");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function desabilitaBtnGravaDistribuicao(){
    document.getElementById("btn_salvardistribuicao").disabled = true;
    if(document.getElementById("btn_salvardistribuicao").disabled = true){
       mudaBotao =  document.getElementById("btn_salvardistribuicao");
        mudaBotao.style.backgroundColor = "gray";
    }
}

function habilitaBtnGravarDistribuicao(){
    document.getElementById("btn_salvardistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_salvardistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
}

function limparCamposCadasDistribuicao(){
    document.getElementById("selecionaProjeto_distribuicao").value = '';
    document.getElementById("listaTarefa").value = ''; 
    document.getElementById("listaPessoa").value = '';
   
    
   
}

function habilitaBtnAtualizarDistribuicao(){
        document.getElementById("btn_atualizarCadasDistribuicao").disabled = false;
     mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
     mudaBotao.style.backgroundColor = "#698FEB";
 }

 function desabilitaBtnAtualizarDistribuicao(){
    document.getElementById("btn_atualizarCadasDistribuicao").disabled = true;
 mudaBotao =  document.getElementById("btn_atualizarCadasDistribuicao");
 mudaBotao.style.backgroundColor = "gray";
}

 function desabilitaBtnExcluirDistribuicao(){
    document.getElementById("btn_excluirCadasDistribuicao").disabled = true;
    mudaBotao =  document.getElementById("btn_excluirCadasDistribuicao");
    mudaBotao.style.backgroundColor = "gray";
}

function habilitaBtnExcluirDistribuicao(){
    document.getElementById("btn_excluirCadasDistribuicao").disabled = false;
    mudaBotao =  document.getElementById("btn_excluirCadasDistribuicao");
        mudaBotao.style.backgroundColor = "#698FEB";
}


recebe_projetos_distribuicao = [];
recebe_tarefas_distribuicao = [];
recebe_pessoas_distribuicao = [];

function carregaTabelaDistribuicao(json_people_distribuicao,json_tarefas_distribuicao,json_projetos_distribuicao){

    if(json_people_distribuicao != null){
        recebe_pessoas_distribuicao = json_people_distribuicao;
    }
    if(json_tarefas_distribuicao != null){
        recebe_tarefas_distribuicao = json_tarefas_distribuicao;
    }
    if(json_projetos_distribuicao != null){
        recebe_projetos_distribuicao = json_projetos_distribuicao;
    }

    nomePessoa = '';
    nomeTarefa = '';
    nomeProjeto = '';
    codProjeto = '';
    corProjeto = '';
    vetor_tabela_distribuicao = [];
    codDistribuicao = parseInt(document.getElementById("codDistribuicao").value);
    vetor_tabelaDistribuicao = [];
    preparaVetor = [];
    xhrTabelaDistribuicao = new XMLHttpRequest();
    xhrTabelaDistribuicao.open('GET', URLGETDISTRIBUICAO, true);
    xhrTabelaDistribuicao.onreadystatechange = function(){     
        if(xhrTabelaDistribuicao.readyState == 4){
            if(xhrTabelaDistribuicao.status == 200){
                json_tabela_distribuicao = (JSON.parse(xhrTabelaDistribuicao.responseText));                 
                for(i = 0; i< json_tabela_distribuicao.length;i++){
                    for(x = 0; x < recebe_pessoas_distribuicao.length;x++){
                        if(json_tabela_distribuicao[i]['fk_pes_id'] == recebe_pessoas_distribuicao[x]['pes_id']){
                            nomePessoa = recebe_pessoas_distribuicao[x]['pes_nome'];        
                        }
                    }
                    for(x = 0; x < recebe_tarefas_distribuicao.length;x++){
                        if(json_tabela_distribuicao[i]['fk_trf_id'] == recebe_tarefas_distribuicao[x]['trf_id']){
                            nomeTarefa = recebe_tarefas_distribuicao[x]['trf_name']; 
                            codProjeto = recebe_tarefas_distribuicao[x]['fk_prj_id'];
                            
                            for(z = 0; z< recebe_projetos_distribuicao.length;z++){
                                
                                if(codProjeto == recebe_projetos_distribuicao[z]['prj_id']){
                                    corProjeto = recebe_projetos_distribuicao[z]['prj_color'];
                                    nomeProjeto = recebe_projetos_distribuicao[z]['prj_nome'];
                                   
                                }
                            }
                            
                        }
                    }
                    preparaVetor = [nomePessoa,nomeTarefa, nomeProjeto, corProjeto];
                    vetor_tabela_distribuicao.push(preparaVetor);
                    
                }
                
                for(i = 0;i<vetor_tabela_distribuicao.length;i++){
                    linhaTabelaDistribuicao = ["<tr><td>"+vetor_tabela_distribuicao[i][0]+"</td><td>"+vetor_tabela_distribuicao[i][1]+"</td><td>"+vetor_tabela_distribuicao[i][2]+"</td><td bgcolor="+vetor_tabela_distribuicao[i][3]+"></td></tr>"];
                    vetor_tabelaDistribuicao.push(linhaTabelaDistribuicao);                  
                }
            }else if(xhrTabelaDistribuicao.status == 404){}
            }    
        document.getElementById("corpoTabelaDistribuicao").innerHTML = '';
    for(i = 0; i < vetor_tabelaDistribuicao.length;i++){
         document.getElementById("corpoTabelaDistribuicao").innerHTML += vetor_tabelaDistribuicao[i];
    }   
}
xhrTabelaDistribuicao.send();
}

/*///////////////////////////////////////*/


