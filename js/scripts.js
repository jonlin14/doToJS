// $(function () {
  $(document).ready(function (){


    var selectedList;
    // var new_List = { name,  tasks: []};

    $('form#new_List').submit(function(event) {
        event.preventDefault();
        var new_List_Name = $('input#list_Name').val();
        var new_List = { name: new_List_Name, tasks: []};
        //Adding a list class to lists id
        $('#lists').append('<li class="list">' + new_List.name + '</li>');
        //Attaching a event handler to every list class made to make selectedList equal
        //to the new_List made. We can now run our code on selectedList
          selectedList = new_List;
        $('.list').last().click(function() {
          selectedList = new_List;
          //display all tasks for selected list
          // $('#tasks').append(selectedList.tasks);
          $("ul#tasks").text("");
          selectedList.tasks.forEach(function(task) {
           $("ul#tasks").append("<li>" + task.name + "</li>");
          });
        });

        $('form#new_Task').unbind('submit');
        $('form#new_Task').submit(function(event) {
            event.preventDefault();
            var new_Task_Name = $('input#task_Name').val();
            //var new_Task_Description = $('input#task_Description').val();
            var new_Task = { name: new_Task_Name};
            console.log(selectedList);
            selectedList.tasks.push(new_Task)
            // $('#tasks').append('<li class="task">' + new_Task.name + '</li>');


            //   $('#tasks').each(function() {
            //     var new_Task = {name: $(this).find('input#.task_Name')};
            //
            //
            // });
            $("ul#tasks").text("");
             selectedList.tasks.forEach(function(task) {
              $("ul#tasks").append("<li>" + task.name + "</li>");
            });
        });







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
