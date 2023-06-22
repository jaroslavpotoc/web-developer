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
    <title>Kontakt - JP GENERATION</title>
    <link href="../image/logo/asset-8-8.png" rel="icon" type="image/x-icon">
    <link href="../css/style.css" rel="stylesheet">
    <link href="../css/media.css" rel="stylesheet">
    <link href="../css/keyframe.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
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
</section>
<!-------------ZACIATOK CONTENTU-------------->
<section class="services-conta">
    <header class="headline-conta">
        <h2>Dostali sme vašu správu!</h2>
    </header>
    <div class="con-look-conta">
        <span class="span-con">Vďaka! Náš tím Vás kontaktuje v najbližšom možnom čase.</span>
    </div>
    <section class="contact">
        <div class="contact-row">
            <div class="contact-col">
                <i class="fa-solid fa-mobile-screen-button"></i>
                <h3>Telefóne číslo</h3>
                <p>+421 907 112 358</p>
            </div>
            <div class="contact-col con-mid">
                <i class="fa-solid fa-location-dot"></i>
                <h3>Adresa</h3>
                <p>Niekde na planéte Zem</p>
            </div>
            <div class="contact-col">
                <i class="fa-solid fa-envelope-open-text"></i>
                <h3>E–mail</h3>
                <p>info@jpgeneration.sk</p>
            </div>
        </div>
    </section>
</section>
<!-------------SPRACOVANIE FORMULARA-------------->
<section class="services">
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $meno_zakaznika = $_POST["name"];
        $priezvisko_zakaznika = $_POST["lastname"];
        $email_zakaznika = $_POST["email"];
        $predmet_spravy = $_POST["subject"];
        $sluzba = $_POST["services"];
        $sprava = $_POST["message"];
        $gdpr = $_POST["checkbox"];

        if ($gdpr == "on") {
            $gdpr = "Áno";
        } else {
            $gdpr = "Nie";
        }

        $cas_vyplnenia = date('Y-m-d H:i:s', time());

        $email_body = '<p style="font-size: 12px; font-weight: 600; line-height: 15px;">Meno zákazníka:</p>' .
            '<p style="color: #00FFFF; font-size: 15px; font-weight: 400; line-height: 15px;">' . $meno_zakaznika . '</p>' .
            '<p style="font-size: 12px; font-weight: 600; line-height: 15px;">Priezvisko zákazníka:</p>' .
            '<p style="color: #00FFFF; font-size: 15px; font-weight: 400; line-height: 15px;">' . $priezvisko_zakaznika . '</p>' .
            '<p style="font-size: 12px; font-weight: 600; line-height: 15px;">E-mail zákazníka:</p>' .
            '<p style="color: #00FFFF; font-size: 15px; font-weight: 400; line-height: 15px;">' . $email_zakaznika . '</p>' .
            '<p style="font-size: 12px; font-weight: 600; line-height: 15px;">Predmet zákazníka:</p>' .
            '<p style="color: #00FFFF; font-size: 15px; font-weight: 400; line-height: 15px;">' . $predmet_spravy . '</p>' .
            '<p style="font-size: 12px; font-weight: 600; line-height: 15px;">Služba, ktorú si zákazník vybral:</p>' .
            '<p style="color: #00FFFF; font-size: 15px; font-weight: 400; line-height: 15px;">' . $sluzba . '</p>' .
            '<p style="font-size: 12px; font-weight: 600; line-height: 15px;">Správa zákazníka:</p>' .
            '<p style="color: #00FFFF; font-size: 15px; font-weight: 400; line-height: 15px;">' . $sprava . '</p>' .
            '<p style="font-size: 12px; font-weight: 600; line-height: 15px;">Zákazník súhlasí s GDPR:</p>' .
            '<p style="color: #00FFFF; font-size: 15px; font-weight: 400; line-height: 15px;">' . $gdpr . '</p>' .
            '<p style="font-size: 12px; font-weight: 600; line-height: 15px;">Presný čas vyplnenia formulára:</p>' .
            '<p style="color: #00FFFF; font-size: 15px; font-weight: 400; line-height: 15px;">' . $cas_vyplnenia . '</p>';



        $odkial = "info@jpgeneration.sk";
        $predmet = "Nová správa od: " . $meno_zakaznika ." ". $priezvisko_zakaznika ;

        $headers = "From: " . $odkial . "\r\n";
        $headers .= "Reply-To: " . $email_zakaznika . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n"; // Nastavenie typu obsahu na HTML

        if (mail($odkial, $predmet, $email_body, $headers)) {
            header("Location: kontakt-vdaka.php");
            exit;
        } else {
            echo "Došlo k chybe pri odosielani formuláru. Zkuste to prosím znovu.";
        }
    }
    ?>

</section>
<br>
<br>
<!-------------MAPA------------->
<section class="google-map">
    <iframe allowfullscreen=""
            class="map"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1308.7135232393316!2d21.226232!3d49.00246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ef29a65d6762f%3A0x70dfa9855d39e2fe!2sMatice%20slovenskej%204768%2F4%2C%20080%2001%20Pre%C5%A1ov%2C%20Slovensko!5e0!3m2!1ssk!2sus!4v1686171964905!5m2!1ssk!2sus"
            style="border:0;"></iframe>
</section>
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
                <p>2023 © All rights reserved. Website by <a class="text-link" href="https://www.jpgeneration.sk">JP
                        GENERATION</a>.</p>
            </div>
        </section>
</footer>
<br>
<br>
<!-------------JAVA SCRIPT-------------->
<script src="../js/nav.js" type="text/javascript"></script>
<script src="../js/dropdown-nav.js" type="text/javascript"></script>
<script src="../js/fade-in-up-left.js" type="text/javascript"></script>
<script crossorigin="anonymous" src="https://kit.fontawesome.com/6d4730ed07.js"></script>
</body>
</html>