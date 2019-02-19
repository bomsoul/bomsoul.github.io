<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="indexstyle.css">
</head>
<body style="background-color:skyblue;">
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Bom Banking Account</a>
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <div class="form-inline" style="padding-top:8px;padding-right:15px">
                    <form method="post">
                        <label for="username" style="color: white;">Username :</label>
                        <input type="text" id="username" placeholder="Enter Username" name="username" class="form-control form-rounded">
                        <label for="password" style="color: white;">Password :</label>
                        <input type="password" id="password" placeholder="Enter Password" name="password" class="form-control form-rounded">
                        <button type="login" name="login" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </ul>
        </div>
    </nav>

    <div class="container">
        <?php
            if(isset($_POST['login'])){
                if($_POST["username"]=="b5910450409" && $_POST["password"] == "bomsoul"){
                    header('Location: home/home.php');
                }
                else{
                    echo "<h3>Invalid</h3>";
                }
            }
        ?>
        <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                    <img src="uploads/bg1.jpg" style="width:100% ;height:400px">
                <div class="text">BangSaen Beach</div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                    <img src="uploads/bg2.jpg" style="width:100%;height:400px">
                <div class="text">Grand Canyon ChonBuri</div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                    <img src="uploads/bg3.jpg" style="width:100%;height:400px">
                <div class="text">Chong Nonsi Bridge</div>
            </div>
        </div>
        <div style="text-align:center">
            <span class="dot"></span> 
            <span class="dot"></span> 
            <span class="dot"></span> 
        </div>
        <p><b>Username is :</b> b5910450409</p>
        <p><b>Password is :</b> bomsoul</p>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="indexscript.js"></script>
</body>
</html>
