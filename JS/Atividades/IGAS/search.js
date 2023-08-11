const marca = document.getElementById("marca")
const modelo = document.getElementById("modelo")
const geracao = document.getElementById("geracao")

marca.addEventListener("change", function () 
{
    const selecionado=marca.value
    if (selecionado==="1") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="corsa">Corsa</option>
    <option value="celta">Celta</option>
    <option value="camaro">Camaro</option>
    <option value="opala">Opala</option>
    `;
} 
if (selecionado==="2") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="uno">Uno</option>
    <option value="palio">Palio</option>
    <option value="fast">Fastback</option>
    <option value="147">147</option>
    `;
} 
if (selecionado==="3") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="ka">Ka</option>
    <option value="fiesta">Fiesta</option>
    <option value="mustang">Mustang</option>
    <option value="maverick">Maverick</option>
    `;
} 
if (selecionado==="4") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="city">Cityc</option>
    <option value="fit">Fit</option>
    <option value="prelude">Prelude</option>
    <option value="civic">Civic</option>
    `;
} 
if (selecionado==="5") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="hb20">HB20</option>
    <option value="i30">I30</option>
    <option value="sonata">Sonata</option>
    <option value="tiburon">Tiburon</option>
    `;
} 
if (selecionado==="6") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="cherokee">Cherokee</option>
    <option value="renegade">Renegade</option>
    <option value="gladiator">Gladiator</option>
    <option value="willy">Willys</option>
    `;
} 
if (selecionado==="7") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="sentra">Sentra</option>
    <option value="livina">Livina</option>
    <option value="370z">370z</option>
    <option value="pathfinder">Pathfinder</option>
    `;
} 
if (selecionado==="8") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="clio">Clio</option>
    <option value="scenic">Scenic</option>
    <option value="megane">Megane</option>
    <option value="19r">19r</option>
    `;
} 
if (selecionado==="9") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="corolla">Corolla</option>
    <option value="fielder">Fielder</option>
    <option value="supra">Supra</option>
    <option value="bandeirante">Bandeirante</option>
    `;
} 
if (selecionado==="10") {
    modelo.innerHTML = `
    <option value="" selected hidden  class="plch" > Modelo</option>
    <option value="gol">Gol</option>
    <option value="golf">Golf</option>
    <option value="passat">Passat</option>
    <option value="fusca">Fusca</option>
    `;
} 
}
)


console.log(marca.value);





