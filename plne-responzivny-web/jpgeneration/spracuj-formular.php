<!DOCTYPE html>
<html lang="sk">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-408VDD82V3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-408VDD82V3');
    </script>
    <!-- Start cookieyes banner -->
    <script id="cookieyes" src="https://cdn-cookieyes.com/client_data/56e945907a950eda2b4d673f/script.js"
            type="text/javascript"></script>
    <!-- End cookieyes banner -->
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>JP GENERATION</title>
    <link href="../image/logo/asset-8-8.png" rel="icon" type="image/x-icon">
    <link href="../css/style.css" rel="stylesheet">
    <link href="../css/media.css" rel="stylesheet">
    <link href="../css/keyframe.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
</head>
<body>
<!-------------NAV MENU--------------->
<section class="nav-background">
    <div class="nav-complet">
        <div class="log-div">
            <a class="logo-jp" href="index.html">
                <img alt="JP GENERATION logo" id="logo" src="../image/logo/asset-8-8.png">
            </a>
        </div>
        <div class="topnav" id="myTopnav">
            <a class="icon" href="javascript:void(0);" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
            <a href="index.html">Domov</a>
            <div class="dropdown">
                <button class="dropbtn">Portfólio
                    <i aria-hidden="true" class="fa fa-angle-down" id="arrow1"></i>
                </button>
                <div class="dropdown-content">
                    <a href="portfolio/fotky.html">Fotky</a>
                    <a href="portfolio/video.html">Video</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Služby
                    <i aria-hidden="true" class="fa fa-angle-down" id="arrow2"></i>
                </button>
                <div class="dropdown-content">
                    <a href="sluzby/foto-produkcia.html">Foto produkcia</a>
                    <a href="sluzby/video-produkcia.html">Video produkcia</a>
                    <a href="sluzby/graficky-dizajn.html">Grafický dizajn</a>
                    <a href="sluzby/wordpress-web.html">Wordpress web</a>
                    <a href="sluzby/sprava-domeny-a-hostingu.html">Správa domény a hostingu</a>
                    <a href="sluzby/digitalna-strategia.html">Digitálna stratégia</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Cenník
                    <i aria-hidden="true" class="fa fa-angle-down" id="arrow3"></i>
                </button>
                <div class="dropdown-content">
                    <a href="cennik/cena-foto-produkcia.html">Foto produkcia</a>
                    <a href="cennik/cena-video-produkcia.html">Video produkcia</a>
                    <a href="cennik/cena-graficky-dizajn.html">Grafický dizajn</a>
                    <a href="cennik/cena-wordpress-web.html">Wordpress web</a>
                    <a href="cennik/cena-sprava-domeny-a-hostingu.html">Správa domény a hostingu</a>
                    <a href="cennik/cena-digitalna-strategia.html">Digitálna stratégia</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">O nás
                    <i aria-hidden="true" class="fa fa-angle-down" id="arrow4"></i>
                </button>
                <div class="dropdown-content">
                    <a href="o-nas/kto-vlastne-sme.html">Kto vlastne sme</a>
                    <a href="o-nas/zakaznici.html">Zákazníci</a>
                </div>
            </div>
            <a href="kontakt.html">Kontakt</a>
        </div>
    </div>
<br>
<br>
<!-------------SERVICES-------------->
<section class="services">
    <?php
    $meno_zakaznika = $_POST["name"];
    echo "<p>Meno zákaznika: </p>". "<span>".$meno_zakaznika. "</span>";
    echo "<br>" ;
    $priezvisko_zakaznika = $_POST["lastname"];
    echo "<p>Priezvisko zákaznika: </p>". "<span>" .$priezvisko_zakaznika. "</span>";
    echo "<br>" ;
    $email_zakaznika = $_POST["email"];
    echo "<p>E-mail zákaznika:\n </p>". "<span>" .$email_zakaznika. "</span>";
    echo "<br>" ;
    $predmet_spravy = $_POST["subject"];
    echo "<p>Predmet zákaznika:\n </p>". "<span>" .$predmet_spravy. "</span>";
    echo "<br>" ;
    $sluzba = $_POST["services"];
    echo "<p>Služba ktorú si vybral zákaznik:\n </p>". "<span>" .$sluzba. "</span>";
    echo "<br>" ;
    $sprava = $_POST["message"];
    echo "<p>Správa zákazníka:\n</p>" . "<pre><span>" .$sprava. "</span></pre>";
    echo "<br>" ;
    $gdpr = $_POST["checkbox"];
    echo "<p>Zákaznik súhlasi s GDPR: </p>". "<span>" .$gdpr. "</span>";
    ?>
</section>

<br>
<br>
<!-------------FOOTER-------------->
<footer>
    <section class="main">
        <div class="fot-logo-disc">
            <div class="fot-logo">
                <a href="index.html">
                    <img alt="logo jp generation" class="logo-foot" src="../image/logo/asset-8-8.png">
                </a>
            </div>
            <div class="slog">
                <p>My sme digitálna generácia</p>
            </div>
            <div class="line-con1"></div>
        </div>
        <div class="fot-services">
            <h4 class="fot-h">Služby</h4>
            <div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-angle-right"></i>
                    <a href="sluzby/foto-produkcia.html">Foto produkcia</a>
                </div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-angle-right"></i>
                    <a href="sluzby/graficky-dizajn.html">Grafický dizajn</a>
                </div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-angle-right"></i>
                    <a href="sluzby/wordpress-web.html">Wordpress web</a>
                </div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-angle-right"></i>
                    <a href="sluzby/digitalna-strategia.html">Digitálna stratégia</a>
                </div>
            </div>
        </div>
        <div class="fot-speed">
            <h4 class="fot-h">Rýchle odkazy</h4>
            <div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-angle-right"></i>
                    <a href="o-nas/kto-vlastne-sme.html">Kto vlastne sme</a>
                </div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-angle-right"></i>
                    <a href="portfolio/fotky.html">Portfólio</a>
                </div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-angle-right"></i>
                    <a href="gdpr.html">Zásady ochrany osobných údajov</a>
                </div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-angle-right"></i>
                    <a href="cookie.html">Zásady používania súborov cookie</a>
                </div>
            </div>
        </div>
        <div class="fot-conta">
            <h4 class="fot-h">Kontakt</h4>
            <div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-map-marker"></i>
                    <a href="#">Niekde na planéte Zem</a>
                </div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa fa-phone"></i>
                    <a href="tel:0907112358">+421 907 112 358</a>
                </div>
                <div class="fot-text">
                    <i aria-hidden="true" class="fa-solid fa-envelope"></i>
                    <a href="mailto:info@jpgeneration.sk">info@jpgeneration.sk</a>
                </div>


            </div>
        </div>
    </section>
    <!-------------SOCIAL ICON------------->
    <section class="soc-icon">
        <div class="soc-an">
            <ul>
                <li>
                    <a href="https://www.facebook.com/people/jpgeneration/100087779516122/" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa-brands fa-facebook"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jpgeneration/" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-instagram"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@jpgeneration/featured" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-youtube-play"></span>
                    </a>
                </li>
                <li>
                    <a href="tel:+421907112358">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-phone-square"></span>
                    </a>
                </li>
                <li>
                    <a href="mailto:info@jpgeneration.sk">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-envelope-o"></span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <!-------------COPYRIGHT-------------->
    <section class="copy-write">
        <div class="copy-box">
            <p>Copyright © 2023. All rights reserved.</p>
        </div>
    </section>
</footer>
<br>
<br>
<!-------------JAVA SCRIPT-------------->
<script src="../js/slider.js" type="text/javascript"></script>
<script src="../js/nav.js" type="text/javascript"></script>
<script src="../js/dropdown-nav.js" type="text/javascript"></script>
<script src="../js/project-gallery.js" type="text/javascript"></script>
<script src="../js/skill-bar.js" type="text/javascript"></script>
<script src="https://kit.fontawesome.com/6d4730ed07.js" crossorigin="anonymous"></script>
</body>
</html>