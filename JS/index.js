var barraNavegacion = 
`<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
    <a class="navbar-brand" href="/index.html"><img src="/IMAGEN/Logotipo Original (PNG).png"
            alt="" class="animate__animated animate__shakeY"></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/IniciarSecion.html">Ingresar</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Registro.html">Registro</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/Contacto.html">Contacto</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/Sucursal.html">Sucursales</a>
            </li>
        </ul>



    </div>
</div>
</nav>
`

document.getElementById("idheader").innerHTML = barraNavegacion;


var barrafooter = 
`
<div class="vertical">
<ul>
    <li><a href="/index.html">Inicio</a></li>
    <li><a href="/IniciarSecion.html">Ingresar</a></li>
    <li><a href="/Registro.html">Registrar</a></li>
    <li><a href="/Contacto.html">Contacto</a></li>
    <li><a href="/Sucursal.html">Sucursales</a></li>
</ul>
</div>
<div class="imagenbarra">
<a href="/index.html"><img src="/IMAGEN/Logotipo Original (PNG).png" alt="Peluqueria" class="animate__animated animate__swing"> </a>
</div>
<div class="iconos">
<i class="fab fa-facebook-f"></i>
<i class="fab fa-telegram-plane"></i>
<i class="fab fa-instagram"></i>
<i class="fas fa-envelope"></i>
<i class="fab fa-whatsapp"></i>
</div>
<h1>Derechos reservados Victor Avila 2021</h1>
`
document.getElementById("idfooter").innerHTML = barrafooter;