<?php
$tasks = file('tasks.txt');
echo '<ul>';
foreach ($tasks as $task) {
    echo '<li>' . htmlspecialchars($task) . '</li>';
}
echo '</ul>';
?>