window.addEventListener('load', () => {
    let errores = [];
    const form = document.querySelector("form.create-form");
    const productName = document.querySelector("#name");
    const descriptionName = document.querySelector("#description");
    const imageName = document.querySelector("#images");
    const productPrice = document.querySelector("#price");
    form.addEventListener('submit', (e) => {
        errores = [];

        if (productName.value == '') {
            errores.push('El nombre del producto no puede estar vacío');

        } else if (productName.value.length < 5) {
            errores.push('El nombre debe tener al menos 5 caracteres');
        };

        if (descriptionName.value == '') {
            errores.push('La descripción no puede estar vacía');
        } else if (descriptionName.value.length < 20) {
            errores.push('La descripción debe tener al menos 20 caracteres');
        };

        if (imageName.value == '') {
            errores.push('Debe seleccionar una imagen para el producto');
        };

        if (productPrice.value == '') {
            errores.push('El importe no puede estar vacio');
        } else if (productPrice.value < 0) {
            errores.push('El importe debe ser mayor a 0');
        }

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errors');
            ulErrors.classList.add('error-msg');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErrors.innerHTML += `<li >  ${errores[i]} </li>`;
            };
        }
    });
})