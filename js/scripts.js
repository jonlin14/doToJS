$(function () {

    $('form#new_Task').submit(function(event) {
        var new_Task_Name = $('input#task_Name').val();
        var new_Task_Description = $('input#task_Description').val();

        var new_Task = { name: new_Task_Name, description: new_Task_Description };

        $('input#task_Name').val("");
        $('input#task_Description').val("");

        $('#tasks').append('<li class="task">' + new_Task.name + '</br>' + new_Task.description + '</li>');

        $('.task').last().click(function() {
            $(this).remove();
            $('#completed').append('<li class="completed_task">' + new_Task.name + '</br>' + new_Task.description + '</li>');
        });

        $('#completed').last().click(function() {
            $(this).remove();
        });

        event.preventDefault();
    });


});
