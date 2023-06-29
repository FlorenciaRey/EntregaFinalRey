let platos = [
    {
        id: 1,
        nombre: "Canelones de carne",
        precio: 940,
        imagen: "./images/canelonesdecarne.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 2,
        nombre: "Canelones de choclo",
        precio: 940,
        imagen: "./images/canelonesdejychoclo.jpg",
        disponible: true,
        tipo: "congelados"

    },
    {
        id: 3,
        nombre: "Cerdo Agridulce",
        precio: 1080,
        imagen: "./images/cerdoagridulce.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 4,
        nombre: "Lasagnas de carne",
        precio: 1100,
        imagen: "./images/lasagnacarne.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 5,
        nombre: "Lasagnas de pollo",
        precio: 1100,
        imagen: "./images/lasagnapollo.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 6,
        nombre: "Lasagnas de vegetales",
        precio: 1100,
        imagen: "./images/lasagnavegetales.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 7,
        nombre: "Pollo a la crema",
        precio: 1260,
        imagen: "./images/polloalacrema.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 8,
        nombre: "Pollo al curry",
        precio: 1230,
        imagen: "./images/polloalcurry.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 9,
        nombre: "Pollo Chino",
        precio: 1230,
        imagen: "./images/pollochino.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 10,
        nombre: "Berenjenas parmesana",
        precio: 1265,
        imagen: "./images/berenjenasParmesana.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 11,
        nombre: "Canelones de verdura",
        precio: 940,
        imagen: "./images/canelonesdeverdura.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 12,
        nombre: "Carbonada criolla",
        precio: 940,
        imagen: "./images/carbonadacriolla.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 13,
        nombre: "Cazuela de mondongo",
        precio: 1040,
        imagen: "./images/cazuelamondongo.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 14,
        nombre: "Chicken pie",
        precio: 970,
        imagen: "./images/chickenpie.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 15,
        nombre: "Rótolos de espinaca",
        precio: 940,
        imagen: "./images/rotolos.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 16,
        nombre: "Feijoada",
        precio: 940,
        imagen: "./images/feijoada.jpg",
        disponible: true,
        tipo: "congelados"
    },
    {
        id: 17,
        nombre: "Postre brownie y maracuyá",
        precio: 1450,
        imagen: "./images/browniemaracuya.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 18,
        nombre: "Cheesecake",
        precio: 1400,
        imagen: "./images/cheesecake.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 19,
        nombre: "Corteza de café",
        precio: 1100,
        imagen: "./images/cortezadecafe.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 20,
        nombre: "Cúpula de chocolate",
        precio: 1250,
        imagen: "./images/cupuladechocolate.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 21,
        nombre: "Dip de remolacha",
        precio: 200,
        imagen: "./images/dipremolacha.jpg",
        disponible: true,
        tipo: "copetin"
    },
    {
        id: 22,
        nombre: "Dip de zanahoria",
        precio: 200,
        imagen: "./images/dipzanahoria.jpg",
        disponible: true,
        tipo: "copetin"
    },
    {
        id: 23,
        nombre: "Hummus",
        precio: 250,
        imagen: "./images/hummus.jpg",
        disponible: true,
        tipo: "copetin"
    },
    {
        id: 24,
        nombre: "Lemon tart con merengue",
        precio: 750,
        imagen: "./images/lemonconmerengue.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 25,
        nombre: "Torta manzana y pasas",
        precio: 600,
        imagen: "./images/manzanaypasas.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 26,
        nombre: "Paté de foie",
        precio: 340,
        imagen: "./images/parefoie.jpg",
        disponible: true,
        tipo: "copetin"
    },
    {
        id: 27,
        nombre: "Paté de salmón",
        precio: 490,
        imagen: "./images/patesalmon.jpg",
        disponible: true,
        tipo: "copetin"
    },
    {
        id: 28,
        nombre: "Quesito de hierbas",
        precio: 350,
        imagen: "./images/quesitohierbas.jpg",
        disponible: true,
        tipo: "copetin"
    },
    {
        id: 29,
        nombre: "Quesito de pimienta",
        precio: 350,
        imagen: "./images/quesitopimienta.jpg",
        disponible: true,
        tipo: "copetin"
    },
    {
        id: 30,
        nombre: "Quesito de nuez",
        precio: 350,
        imagen: "./images/quisitonuez.jpg",
        disponible: true,
        tipo: "copetin"
    },
    {
        id: 31,
        nombre: "Torta rogel",
        precio: 1090,
        imagen: "./images/rogel.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 32,
        nombre: "Tarta de frutas variadas",
        precio: 990,
        imagen: "./images/tartafrutasvariadas.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 33,
        nombre: "Tarta de manzana",
        precio: 720,
        imagen: "./images/tartamanzana.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 34,
        nombre: "Tarta maracuyá y frutillas",
        precio: 990,
        imagen: "./images/tartamaracuyayfrutillas.jpg",
        disponible: true,
        tipo: "postres"
    },
    {
        id: 35,
        nombre: "Brownie y dulce de leche",
        precio: 1190,
        imagen: "./images/tortabrownie.jpg",
        disponible: true,
        tipo: "postres"
    },
    


]
const platosStr = JSON.stringify(platos)

const container = document.getElementById(contenedorCards);
contenedorCards.innerHTML = "";
platos.forEach((plato, indice)=>{
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3", "col-md-4", "col-6", "mb-1", "mt-1");
    let html = `
    <img src="${plato.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${plato.nombre}</h5>
      <p class="card-text">$${plato.precio}</p>
      <a href="#cart" class="btn btn-danger comprar" onClick="funcionComprar(${indice})">Comprar</a>
    </div>
      `;
  card.innerHTML = html;
  contenedorCards.appendChild(card);
  
})

const carrito = []
carritoTraidoJSON = localStorage.getItem("carritoLS")
carrito.push(...((JSON.parse(carritoTraidoJSON))))

function crearCarrito(){
    const listaVacia = document.querySelector(".carritoVacio")
    listaVacia.classList.add("w-100")
    listaVacia.innerHTML = ""
    carrito.forEach((plato,indice)=>{
        let filaCarrito = document.createElement("tr");
    filaCarrito.classList.add("w-100")
    filaCarrito.innerHTML = `
    
        <tbody>
            <td scope="row" class="filaCarrito fs-6">${plato.nombre}</td>
            <td class="filaCarrito_valor fs-6 justify-content-end align-items-end">$${plato.precio}</td>
            <td class="filaCarrito fs-6 col">
                <div>
                <form id='myform' method='POST' class='quantity'  action='#'>
                <input type='button' value='-' class='qtyminus minus' onClick=restarUno(${indice}) field='quantity' />
                <input type='text' name='quantity' value='${plato.cantidad} ' class='qty' />
                <input type='button' value='+' class='qtyplus plus' onClick=sumarUno(${indice}) field='quantity' />
                </form>
                </div>
            </td>
            <td class="filaCarrito_valor fs-6">$${plato.precio * plato.cantidad}</td>
            <td class="filaCarrito_valor">
            <button type="button" class="btn" onClick="eliminarDelCarrito(${indice})"><i class="fa-regular fa-trash-can fa-sm"></i></button>
            </td>
        </tbody>
    </table>
    `;
    listaVacia.appendChild(filaCarrito)
    })
    const totalCarro = document.querySelector(".totalCompra")
    totalCarro.innerHTML = ""
    let contenedorTotal = document.createElement("div")
    contenedorTotal.classList.add("text-center", "h2", "mt-2")
    let total = 0
    carrito.forEach((plato, indice)=>{
        let subtotal = plato.precio * plato.cantidad
        total = total + subtotal
    })
    contenedorTotal.innerHTML = `Total carrito: $ ${total}`
    totalCarro.appendChild(contenedorTotal)
    const finalizar = document.querySelector(".botonFinalizar")
    let botonFinalizar = document.createElement("div")
    botonFinalizar.innerHTML = `
    <button type="button" class="btn btn-dark" onClick="finalizarCompra()">Finalizar Compra</button>
    `;
    contenedorTotal.appendChild(botonFinalizar)

}

crearCarrito()



function agregarAlCarrito(indice){
    const productoClickeado = platos[indice]
    const flor = carrito.findIndex((elemento)=>{
        return elemento.id === platos[indice].id
    } )
    if (flor === -1){
        const platoAgregado = platos[indice]
        platoAgregado.cantidad=1
        carrito.push(platoAgregado)
        console.log(carrito)
        crearCarrito()
    }
    else {
        carrito[flor].cantidad +=1;
        crearCarrito()
    }
    const carritoActualizado = JSON.stringify(carrito)
    localStorage.setItem("carritoLS", carritoActualizado)  
}
function eliminarDelCarrito(indice){
    const productoAeliminar = carrito.splice(indice,1)
    console.log(carrito)
    carritoActualizado = JSON.stringify(carrito)
    localStorage.setItem("carritoLS", carritoActualizado)
    crearCarrito()
    
}

function alertaAgregado(){
    Swal.fire('Producto agregado al carrito')
}

function funcionComprar(indice){
    alertaAgregado()
    agregarAlCarrito(indice)
}

function vaciarCarrito(){
    console.log(carrito)
  carrito.length = 0
    console.log(carrito)
    carritoActualizado = JSON.stringify(carrito)
    localStorage.setItem("carritoLS", carritoActualizado)

}

function finalizarCompra(){
    (async () => {

        const { value: email } = await Swal.fire({
          title: 'Ingresá tu correo electrónico',
          input: 'email',
          inputPlaceholder: 'Enter your email address'
        })
        
        if (email) {
            Swal.fire({
                title: `¡Gracias por tu compra!`,
                text: `Te enviaremos un mail a ${email}`
            })
        }        
        })()
        vaciarCarrito()
        crearCarrito()

}


function sumarUno(indice){
    const productoClickeado = platos[indice]
    carrito[indice].cantidad +=1;
    crearCarrito()
    const carritoActualizado = JSON.stringify(carrito)
    localStorage.setItem("carritoLS", carritoActualizado) 
}

function restarUno(indice){
    if (carrito[indice].cantidad>1){
        const productoClickeado = platos[indice]
    carrito[indice].cantidad = (carrito[indice].cantidad)-1;
    crearCarrito()
    const carritoActualizado = JSON.stringify(carrito)
    localStorage.setItem("carritoLS", carritoActualizado) 
    }
    else {
        eliminarDelCarrito(indice)
        crearCarrito()
    const carritoActualizado = JSON.stringify(carrito)
    localStorage.setItem("carritoLS", carritoActualizado) 
    }
}


const divprueba = document.querySelector(".florencia")
const  crearelemento = document.createElement("div")
crearelemento.innerHTML = `
                <p>Filtrar por tipo de producto</p>
                <div>
                <button type="button" class="btn btn-secondary">Todos</button>
                <button type="button" class="btn btn-secondary" onClick="filtrarProductosCongelados()">Congelados</button>
                <button type="button" class="btn btn-secondary" onClick="filtrarProductosCopetin()">Copetín</button>
                <button type="button" class="btn btn-secondary"  onClick="filtrarProductosPostres()">Postres</button>
                </div>
`
divprueba.append(crearelemento)

function filtrarProductosCongelados(){
    console.log("filtrando productos")
    contenedorCards.innerHTML=""
    platos.forEach((plato, indice)=>{
        if(plato.tipo==="congelados"){
            let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3", "col-md-4", "col-6", "mb-1", "mt-1");
        let html = `
        <img src="${plato.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${plato.nombre}</h5>
          <p class="card-text">$${plato.precio}</p>
          <a href="#cart" class="btn btn-danger comprar" onClick="funcionComprar(${indice})">Comprar</a>
        </div>
          `;
      card.innerHTML = html;
      contenedorCards.appendChild(card);

        }
        
      
    })
}

function filtrarProductosCopetin(){
    console.log("filtrando productos")
    contenedorCards.innerHTML=""
    platos.forEach((plato, indice)=>{
        if(plato.tipo==="copetin"){
            let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3", "col-md-4", "col-6", "mb-1", "mt-1");
        let html = `
        <img src="${plato.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${plato.nombre}</h5>
          <p class="card-text">$${plato.precio}</p>
          <a href="#cart" class="btn btn-danger comprar" onClick="funcionComprar(${indice})">Comprar</a>
        </div>
          `;
      card.innerHTML = html;
      contenedorCards.appendChild(card);

        }
        
      
    })
}

function filtrarProductosPostres(){
    console.log("filtrando productos")
    contenedorCards.innerHTML=""
    platos.forEach((plato, indice)=>{
        if(plato.tipo==="postres"){
            let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3", "col-md-4", "col-6", "mb-1", "mt-1");
        let html = `
        <img src="${plato.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${plato.nombre}</h5>
          <p class="card-text">$${plato.precio}</p>
          <a href="#cart" class="btn btn-danger comprar" onClick="funcionComprar(${indice})">Comprar</a>
        </div>
          `;
      card.innerHTML = html;
      contenedorCards.appendChild(card);

        }
        
      
    })
}