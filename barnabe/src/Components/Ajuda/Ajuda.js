import React from "react";
import './Ajuda.css'

const Ajuda = () => {
    return (
        <div>
            <section className="ajuda">
                <form className="ajuda__form">
                    <label className="ajuda__form--label">Em que podemos ajudar?</label>
                    <input type="text" className="form__input--text" placeholder="Sua resposta" />
                    <button className="ajuda__form--button">Enviar</button>
                </form>
            </section>

        </div>
    )
}

export default Ajuda