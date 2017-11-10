;(function(){
var $form_add_task=$('.task-add'),task_list=[];
init();
$form_add_task.submit(function(event){
event.preventDefault();
var new_task={};
new_task.content=$(this).find('input[name=content]').val();
if(!new_task.content) return;
add_task(new_task);
})
})();
function add_task(new_task){
	task_list.push(new_task);
	store.set('task_list',task_list);
	show_list(task_list);
}
function init(){
	task_list=store.get('task_list')||[];
	show_list(task_list);
}

function show_list(task_list){
	$('.task-list ul').empty();
	for(var i=0;i<task_list.length;i++){
	var data='<li class="task-item">'+
	'<span><input type="checkbox"></span>'
	+'<span>'+task_list[i].content+'</span>'
	+'<span class="fr">'
	+'<span class="task_delete">删除</span>'
	+'<span class="task_describe">详情</span>'
	+'</span>'
	+'</li>';
	$('.task-list ul').append(data);
	}

}