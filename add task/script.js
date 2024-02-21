$(document).ready(function () {
    // Fetch and display tasks on page load
    fetchTasks();

    // Handle form submission to add tasks
    $('#addTaskForm').submit(function (event) {
        event.preventDefault();
        addTask($('#taskName').val());
    });

    // Function to fetch and display tasks
    function fetchTasks() {
        $.ajax({
            url: 'tasks.php',
            type: 'GET',
            success: function (data) {
                $('#taskList').html(data);
            }
        });
    }

    // Function to add a task
    function addTask(taskName) {
        $.ajax({
            url: 'tasks.php',
            type: 'POST',
            data: { taskName: taskName },
            success: function () {
                fetchTasks(); // Refresh the task list after adding a task
                $('#taskName').val(''); // Clear the input field
            }
        });
    }

    // Function to mark a task as completed
    function markTaskCompleted(taskId) {
        $.ajax({
            url: 'tasks.php',
            type: 'POST',
            data: { taskId: taskId },
            success: function () {
                fetchTasks(); // Refresh the task list after marking a task as completed
            }
        });
    }
});
