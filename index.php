<?php

$year = date("Y");

$eventEdition = $year - "1994";
$eventDate = "July 30, " . $year . " 15:00:00";

$timeStampNow = time();
$timeStampEventDate = strtotime($eventDate);

if ($timeStampNow > $timeStampEventDate) {
    $year = $year + 1;
    $eventEdition = $year - "1994";
    $eventDate = "July 30, " . $year . " 15:00:00";   
}

?>
<!doctype html>
<html>
    <head>
        <title>Ile zostało do <?php echo $eventEdition; ?>. Pol'and'Rock Festival?</title>
        <link rel="icon" type="image/png" href="https://polandrockfestival.pl/icons/favicon-32x32.png" sizes="32x32">
        <meta charset="utf-8">
        <meta name="Description" content="Licznik który wskazuje ile musimy jeszcze czekać do festiwalu PolAndRock (dawniej Przystanek Woodstock) czyli najpiękniejszego festiwalu na Świecie!">
        <meta name="Keywords" content="woodstock, licznik, ile, do, woodstocku, zostało, odliczanie, przystanek woodstock, przystanek, polandrock, polandrockfestival, PolAndRock, festiwal, festival">
        <meta name="robots" content="index, follow">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, shrink-to-fit=no">
        <link href="assets/style.css" rel="stylesheet">
    </head>
    <body>
<h2>Do <?php echo $eventEdition; ?>. Pol'<strong>and</strong>'Rock zostało:</h2>
<h1 id="countdown"></h1>
<script src="assets/script.js"></script>
<script>var countDownDate = new Date("<?php echo $eventDate; ?>").getTime();var x=setInterval(HowMuchDoIHaveToWait,1e3);function HowMuchDoIHaveToWait(){var e=(new Date).getTime(),o=countDownDate-e,t=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),n=Math.floor(o%36e5/6e4),r=Math.floor(o%6e4/1e3);document.getElementById("countdown").innerHTML=t+"d   "+a+"h   "+n+"m   "+r+"s "}</script>
    </body>
</html>
