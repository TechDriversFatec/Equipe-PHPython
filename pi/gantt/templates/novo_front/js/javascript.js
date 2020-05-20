
function expandeTarefas() {
    col_tarefas.innerHTML = col_tarefas.innerHTML + "<button type='button' class='btn_shadow3'>TAREFAS 1</button>";
    
}

function expandePessoas() {
    pessoas_list.innerHTML = pessoas_list.innerHTML + "<label class='styleWord1'>DEV 1</label>"
}


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