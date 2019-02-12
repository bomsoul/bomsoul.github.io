<?php
function showOutput(){
        $fileHandle = fopen("data.csv", "r");
        while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
            echo 'Name: ' . $row[0] . '<br>';
            echo 'Country: ' . $row[1] . '<br>';
            echo 'Age: ' . $row[2] . '<br>';
            echo '<br>';
        }   
    }
    function array_csv_download()
    {
        header('Content-Type: text/csv; charset=utf-8');  
        header('Content-Disposition: attachment; filename=data.csv');  
        $output = fopen("php://output", "w");  
        fputcsv($output, array('Name', 'country', 'age'));  
        $result = fopen("data.csv", "r"); 
        while($row = fgetcsv($result, 0, ","))  {  
             fputcsv($output, $row);  
        }  
        fclose($output);  
    }
?>

<html>
<head></head>
<body>
    <form method="post" action="">
        Name: <input type="text" name ="name" placeholder="Enter your name"><br>
        Country: <input type="text" name ="country" placeholder="Enter your country"><br>
        Age: <input type="text" name ="age" placeholder="Enter your age">
        <input type="submit" name="submit" value="Submit">  
        <input type="submit" name="download" value="download">
    </form> 
    <?php
        if (isset($_POST['submit'])){
            $file = fopen('data.csv','a');  // 'a' for append to file - created if doesn't exit
            $line = $_POST["name"].",".$_POST["country"].",".$_POST["age"]."\n";
            fwrite($file, $line);
            fclose($file); 
            showOutput();
            }
    ?>
    <?php
        if (isset($_POST['download'])){
            array_csv_download();
        }
            
    ?>
    
</body>
</html>