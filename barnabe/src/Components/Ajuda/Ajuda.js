import React from "react";
import './Ajuda.css'

const Ajuda = () => {
    return (
        <div>
            <section className="ajuda">
                <form>
                    <label>Em que podemos ajudar?</label>
                    <input type="text" className="form__input--text" placeholder="Sua resposta" />
                    <button>Enviar</button>
                </form>
            </section>

        </div>
    )
}

export default Ajuda