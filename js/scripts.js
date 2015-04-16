$(function () {

    var selectedList;
    // var new_List = { name,  tasks: []};

    $('form#new_List').submit(function(event) {
        event.preventDefault();
        var new_List_Name = $('input#list_Name').val();
        var new_List = { name: new_List_Name, tasks: []};

        $('#lists').append('<li class="list">' + new_List.name + '</li>');

        $('.list').last().click(function() {
          selectedList = new_List;
          //display all tasks for selected list
          $('#tasks').text(selectedList.tasks);
        });
    });

    $('form#new_Task').submit(function(event) {
        event.preventDefault();
        var new_Task_Name = $('input#task_Name').val();
        // var new_Task_Description = $('input#task_Description').val();
        new_List.name = $('#lists').last();


        var new_Task = { name: new_Task_Name};
        new_List.tasks.push(new_Task);
        console.log(new_List);


        $('input#task_Name').val("");
        $('input#task_Description').val("");

        $('#tasks').append('<li class="task">' + new_Task.name + '</li>');

        // $('.task').last().click(function() {
        //     $(this).remove();
        //     $('#completed').append('<li class="completed_task">' + new_Task.name + '</br>' + new_Task.description + '</li>');
        // });
        //
        // $('#completed').last().click(function() {
        //     $(this).remove();
        // });


    });


});
