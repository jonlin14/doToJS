$(function () {
    $('form#new_Task').submit(function(event) {
        var new_Task_Name = $('input#task_Name').val();
        var new_Task_Description = $('input#task_Description').val();

        var new_Task = { name: new_Task_Name, description: new_Task_Description };

        $('#tasks').append('<li>' + new_Task.name + '</br>' + new_Task.description + '</li>');

        event.preventDefault();
    });
});
