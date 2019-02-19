<?php
    header('Content-Type: application/csv');
    header('Content-Disposition: attachment; filename=example.csv');
    header('Pragma: no-cache'); 
    readfile("../uploads/data.csv");
?>

