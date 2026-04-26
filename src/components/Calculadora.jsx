import './Calculadora.css';
import React, { useState } from 'react';

function Calculadora() {

    const [area_lavoura, set_area_lavoura] = useState('');
    const [insumo_por_hectare, set_insumo_por_hectare] = useState('');
    const [preco_insumo, set_preco_insumo] = useState('');
    const [total_insumo, set_total_insumo] = useState(0);
    const [custo_total, set_custo_total] = useState(0);
    const [mostrar_resultado, set_mostrar_resultado] = useState(false);
    const campos_preenchido = area_lavoura !== '' || insumo_por_hectare !== '' || preco_insumo !== '';

    function processa_calculo_insumos(evento) {
        evento.preventDefault();

        const area = parseFloat(area_lavoura);
        const insumo = parseFloat(insumo_por_hectare);
        const preco = parseFloat(preco_insumo);

        if (isNaN(area) || isNaN(insumo) || isNaN(preco)) {
            return;
        }

        const calculo_total_insumo = area * insumo;
        const calculo_custo = calculo_total_insumo * preco;

        set_total_insumo(calculo_total_insumo);
        set_custo_total(calculo_custo);
        set_mostrar_resultado(!mostrar_resultado);
    }

    function limpar_campos_preenchidos() {
        set_area_lavoura('');
        set_insumo_por_hectare('');
        set_preco_insumo('');
        set_mostrar_resultado(false);
    }

    return (
        <section className="calculadora-section py-5" id="calculadora">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="badge rounded-pill text-success border border-success p-2 px-3 fw-bold mb-3" style={{ fontSize: '0.9em' }}>
                        Ferramenta Prática
                    </span>
                    <h2 className="display-5 fw-bold mb-3">
                        Calculadora de Otimização de Insumos
                    </h2>
                    <p className="text-muted lead">
                        Estime rapidamente a quantidade de insumos e o custo total para o tamanho exato da sua lavoura.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="card p-4 shadow-lg">
                            <form id="form-calculadora" onSubmit={processa_calculo_insumos}>

                                <div className="row mb-4">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="area_lavoura" className="form-label fw-bold">1. Área da Lavoura (ha) <span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="area_lavoura"
                                            name="area_lavoura"
                                            min="0.1"
                                            step="0.1"
                                            placeholder="Ex: 5.5"
                                            required
                                            value={area_lavoura}
                                            onChange={(evento) => set_area_lavoura(evento.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="insumo_por_hectare" className="form-label fw-bold">2. Insumo/Semente Recomendada (kg/ha) <span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="insumo_por_hectare"
                                            name="insumo_por_hectare"
                                            min="0.1"
                                            step="0.1"
                                            placeholder="Ex: 150"
                                            required
                                            value={insumo_por_hectare}
                                            onChange={(evento) => set_insumo_por_hectare(evento.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="preco_insumo" className="form-label fw-bold">3. Preço Unitário do Insumo (R$/kg) <span className="text-danger">*</span></label>
                                    <div className="input-group">
                                        <span className="input-group-text">R$</span>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="preco_insumo"
                                            name="preco_insumo"
                                            min="0.01"
                                            step="0.01"
                                            placeholder="Ex: 2.50"
                                            required
                                            value={preco_insumo}
                                            onChange={(evento) => set_preco_insumo(evento.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex gap-2 mt-3">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg flex-grow-1"
                                        name="btn-calcular"
                                    >
                                        {mostrar_resultado ? 'Ocultar Resultados' : 'Calcular Necessidade e Custo'}
                                    </button>

                                    {campos_preenchido && (
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            name="btn-limpar"
                                            onClick={limpar_campos_preenchidos}
                                        >
                                            Limpar Campos
                                        </button>
                                    )}
                                </div>
                            </form>

                            <hr className="my-4" />

                            {mostrar_resultado && (
                                <div id="resultado-calculadora" className="text-center mt-3 p-3 bg-light rounded">
                                    <h4 className="mb-3 text-success">Resultados da Otimização</h4>
                                    <p className="lead">Insumo Total Necessário:</p>
                                    <h3 className="text-dark fw-bold" id="total_insumo">{total_insumo.toFixed(2)} kg</h3>

                                    <p className="lead mt-3">Custo Total Estimado:</p>
                                    <h3 className="text-danger fw-bold" id="custo_total">R$ {custo_total.toFixed(2)}</h3>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calculadora;
