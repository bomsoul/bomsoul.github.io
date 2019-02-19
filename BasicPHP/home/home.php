<?php
    function showOutput(){
        $fileHandle = fopen("../uploads/data.csv", "r");
        $saving = 0;
        $withdraw = 0;
        $total = 0;
        echo "<thead><tr><th>Date</th><th>Withdraw</th><th>Saving</th><th>Balance</th></tr><tbody>";
        while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
            echo '<tr><td>' . $row[0] . '</td>';
            echo '<td id= "withdrawer">' . $row[1] . '</td>';
            echo '<td id = "saver"> ' . $row[2] . '</td>';
            echo '<td>'.$row[3].'</td></tr>';
            $saving += intval($row[2]);
            $withdraw += intval($row[1]);
            $total  = $row[3];
        }
        fclose($fileHandle); 
        echo '<tr><td>' . "Total " . '</td>';
        echo '<td id ="withdrawer">' . $withdraw . '</td>';
        echo '<td id = "saver"> ' . $saving . '</td>';
        echo '<td id = "balance">'.$total .'</td></tr>';
        echo "</tbody>";
    }

    function parseInt(){
        $balance = 0;
        $fileHandle = fopen("../uploads/data.csv", "r");
        while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
            $balance = intval($row[3]);
        }
        fclose($fileHandle);
        return $balance;
    }

    function writeData(){
        $file = fopen('../uploads/data.csv','a'); 
        if($_POST['choose'] == "withdraw" || $_POST['choose'] == "saving" && is_numeric($_POST['amount'])){
            $choose = $_POST['choose'];
            if(is_numeric($_POST['amount'])){
                $balance = parseInt();
                $line = "";
                if($choose == 'withdraw'){
                    $balance -= intval($_POST['amount']); 
                    $line = "\n".date("d/m/Y").","."-".(int)$_POST["amount"].","."0".",".$balance;
                }
                else{
                    $balance += intval($_POST['amount']); 
                    $line = "\n".date("d/m/Y").","."0".",".(int)$_POST["amount"].",".$balance;
                }
                fwrite($file, $line);
                fclose($file);
            }
        }
        else{
            echo '<p id = "warning">Amount must be positive Integer and Please choose the program</p>';
        }
    }
?>

<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <link rel="stylesheet" href="homestyle.css">
    </head>
    <body>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav" style="color: white;">
                <li class="nav-item active" id ="welcome" style="padding-top:5px;">
                    Welcome &nbsp;&nbsp;&nbsp;
                </li>
                <li class="nav-item">
                    Teerayuth Aridakorn &nbsp;&nbsp;<img src="../uploads/profile.jpg" class="rounded-circle" alt="Your Profile" width="40">
                </li>
                <li>
                <form class="inline-form" method="post" style="padding-left:900px;padding-top:3px">
                    <input type="submit" class="btn btn-primary btn-sm" name="logout-btn" value="Logout">
                </form>
                </li>
            </ul>
        </nav>
        <div class="container">
        <button type="button" class="btn btn-primary btn-sm" id ="addData-btn">Add Data</button>
            <form method="post" action="#" class="form-group" id = "addNewData"> 
                <Label class="amount-Label">Amount :</Label> <input type="text" name ="amount" placeholder="Enter your amount" class="form-control form-rounded"><br>
                <input type="radio" name="choose" value ="withdraw">Withdraw <br>
                <input type="radio" name="choose" value = "saving">Saving <br>
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
            </form> 
            <br>
            <br>
            <form action="upload.php" method="post" enctype="multipart/form-data">
                Select file to Upload:
                <input type="file" name="file" id="file"><br>
                <input type="submit" value="Upload File" name="submitUpload">
            </form>
            <form method="post">
                <button type="submit" id ="showTb" name="showTb" class="btn btn-info">Show Data&nbsp;<i class="fas fa-arrow-up"></i></button>
            </form>
            <br>
            <div class="row">
                <div class="col-sm-9"></div>
                <div class="col-sm-3">
                    <form method="post" action="functionphp.php">
                        <button type="submit" class="btn btn-success"><i class="fas fa-download"></i>&nbsp;Download</i></button>
                    </form>
                </div>
            </div>
            <?php
                if (isset($_POST['submit'])){
                    writeData(); 
                }
                if(isset($_POST['logout-btn'])){
                    header('Location: ../index.php');
                }
            ?>
            <div id="data">
                <table class="table table-striped" >
                    <?php
                        if(isset($_POST['showTb'])){
                            showOutput();
                        }
                    ?>
                </table>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" data-auto-replace-svg="nest"></script>
        <script src="myscript.js"></script>
    </body>
</html>