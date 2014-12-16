$("#formulario").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 2
        },
        email: "required",
        comentarios: "required"
    }
});