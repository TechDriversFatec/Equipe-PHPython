///////CONTROLES DOS CADASTROS


//AVANCAR E RECUAR CODIGO////////////////////////////////////////////////////////////////////////////////////////////

function controleDIalog(){
   ident_cod = '';
   if(document.getElementById("abreCadastroPessoas").open == true){
    
       ident_cod = document.getElementById("codPessoa").value;

       recuaCodPessoa();
       avancaCodPessoa();
       
   
   }
    
    
}
function recuaCodPessoa(){
    
    document.getElementById("codPessoa").value = ident_cod - 1;
    
    if(ident_cod > 1){
           document.getElementById("btn_recuaCodPessoa").disabled = false;
           
           
       }else{
           document.getElementById("btn_recuaCodPessoa").disabled = true;
       }
    
}
function avancaCodPessoa(){
    
    document.getElementById("codPessoa").value = ident_cod + 1;
    
    if(ident_cod > 2){
           document.getElementById("btn_avancaCodPessoa").disabled = false;
       }else{
           document.getElementById("btn_avancaCodPessoa").disabled = true;
       }
    
}








////////////////////////////////////////////////////////////////////////////////////////////////////////////////