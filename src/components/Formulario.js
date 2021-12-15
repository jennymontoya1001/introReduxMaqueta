import React from 'react'

export const Formulario = () => {
    return (
        <div className="m-5">
            <form>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Observaciones</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-dark">Enviar al Store</button>
                </div>
            </form>
        </div>
    )
}
