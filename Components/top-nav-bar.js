Vue.component('top-nav-bar', {
    template: `
    <div>
        <div class="jumbotron text-center text-white" style="margin-bottom:0;
            background-image: url('Images/TechBanner.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;">
            <h1>Travis' Tools</h1>
        </div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <a class="navbar-brand" href="index.html">Travis' Tools</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="thermistortest.html">Thermistor Testing</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="vavflow.html">VAV Flow Calculator</a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
    `
});
console.log("Nav Bar Component Created!");