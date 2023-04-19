const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnAgregar = document.querySelectorAll(".card .btn-agregar");
const btnEliminar = document.querySelectorAll(".card .btn-eliminar");
const btnComprar = document.getElementById("btnComprar");

const carritoObjeto = {};

const agregarAlCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.selector,
        id: e.target.dataset.selector,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;

    pintarCarrito();
};

const eliminarDelCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.selector,
        id: e.target.dataset.selector,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.titulo)) {
        carritoObjeto[producto.titulo].cantidad -= 1;
        if (carritoObjeto[producto.titulo].cantidad === 0) {
            delete carritoObjeto[producto.titulo];
        }
    }

    pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);
    actualizarBotones();
};

const actualizarBotones = () => {
    btnEliminar.forEach((btn) => {
        const titulo = btn.dataset.selector;
        if (carritoObjeto.hasOwnProperty(titulo)) {
            btn.classList.remove("d-none");
        } else {
            btn.classList.add("d-none");
        }
    });
};

btnAgregar.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));

btnEliminar.forEach((btn) => btn.addEventListener("click", eliminarDelCarrito));

pintarCarrito();


btnComprar.addEventListener('click', function () {
    window.location.href = 'pag-despacho.html';
});



