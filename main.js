


const pantalla = document.getElementById("resultado");
        const botones = document.querySelectorAll("button");
        console.log(botones);

        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                let textoBoton = boton.textContent;

                if (boton.id === "c") {
                    pantalla.textContent = "0";
                    return;
                }

                if (boton.id === "borrar" || pantalla.textContent === "Error!") {
                    if (boton.id === "") {
                        pantalla.textContent = "0";
                        return;
                    }
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    return
                }

                if (boton.id === "equal") {
                    try {
                        pantalla.textContent = eval(pantalla.textContent);
                    console.log("igual apretado");
                    return;
                    } catch (error) {
                        pantalla.textContent = "Error!";
                        return;
                    }
                    
                }

                if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
                    resultado.textContent = textoBoton;
                } else {
                    resultado.textContent += textoBoton;
                }
            })
        })