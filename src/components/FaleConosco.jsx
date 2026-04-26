import './FaleConosco.css';
import React, { useState } from 'react';

function FaleConosco() {

    const estado_inicial_formulario = {
        nome: '',
        email: '',
        telefone: '',
        estado_origem: '',
        assunto: '',
        mensagem: '',
        contato_ligacao: true,
        contato_whatsapp: false,
        contato_email: false,
        atendimento_pcd: true
    };

    const [dados_formulario, set_dados_formulario] = useState(estado_inicial_formulario);

    const manipula_mudanca_texto = (evento) => {
        const nome_campo = evento.target.name;
        const valor_campo = evento.target.value;

        set_dados_formulario((estado_anterior) => ({
            ...estado_anterior,
            [nome_campo]: valor_campo
        }));
    };

    const manipula_mudanca_checkbox = (evento) => {
        const nome_campo = evento.target.name;
        const esta_marcado = evento.target.checked;

        set_dados_formulario((estado_anterior) => ({
            ...estado_anterior,
            [nome_campo]: esta_marcado
        }));
    };

    const processa_envio_formulario = (evento) => {
        evento.preventDefault();
        console.log(dados_formulario);
    };

    return (
        <section className="contato-section" id="fale-conosco">
            <div className="container my-0">
                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <div className="text-center mb-5">
                            <span className="badge rounded-pill text-warning border border-warning p-2 px-3 fw-bold mb-3" style={{ fontSize: '0.9em' }}>
                                Contato
                            </span>
                            <h1 className="display-4 fw-bold mb-3">
                                Fale Conosco
                            </h1>
                            <p className="text-muted lead">
                                Tem dúvidas ou quer saber mais sobre o AgroConecta? Entre em contato conosco!
                            </p>
                        </div>

                        <form onSubmit={processa_envio_formulario} id="form-contato" className="bg-light p-4 rounded shadow">

                            <p className="text-start">* Campos obrigatórios</p>

                            <div className="text-start mb-3">
                                <label htmlFor="nome" className="form-label">Nome Completo <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="nome" name="nome" placeholder="Digite seu nome completo" value={dados_formulario.nome} onChange={manipula_mudanca_texto} required />
                                <div className="invalid-feedback" id="nome-feedback">
                                    Por favor, insira seu nome completo.
                                </div>
                            </div>

                            <div className="text-start mb-3">
                                <label htmlFor="email" className="form-label">E-mail <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Digite seu e-mail" value={dados_formulario.email} onChange={manipula_mudanca_texto} required />
                                <div className="invalid-feedback" id="email-feedback">
                                    Por favor, insira um e-mail válido.
                                </div>
                            </div>

                            <div className="text-start mb-3">
                                <label htmlFor="telefone" className="form-label"> Telefone <span className="text-danger">*</span></label>
                                <input type='tel' className="form-control" id="telefone" name="telefone" placeholder="Seu telefone com DDD" value={dados_formulario.telefone} onChange={manipula_mudanca_texto} required />
                                <div className="invalid-feedback">
                                    Por favor, insira seu telefone com DDD.
                                </div>
                            </div>

                            <div className="text-start mb-3">
                                <label htmlFor="estado_origem" className="form-label">Selecione o estado que você está falando <span className="text-danger">*</span>:</label>
                                <select className="form-select" id="estado_origem" name="estado_origem" value={dados_formulario.estado_origem} onChange={manipula_mudanca_texto} required>
                                    <option value="" disabled>Selecione um estado...</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PR">Paraná</option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor, selecione um estado.
                                </div>
                            </div>

                            <div className="text-start mb-3">
                                <label htmlFor="assunto" className="form-label">Assunto <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="assunto" name="assunto" placeholder="Sobre o que deseja falar?" value={dados_formulario.assunto} onChange={manipula_mudanca_texto} required />
                                <div className="invalid-feedback">
                                    Por favor, insira o assunto.
                                </div>
                            </div>

                            <div className="text-start mb-3">
                                <label htmlFor="mensagem" className="form-label">Mensagem <span className="text-danger">*</span></label>
                                <textarea
                                    className="form-control"
                                    id="mensagem"
                                    name="mensagem"
                                    placeholder="Digite sua mensagem..."
                                    rows="6"
                                    maxLength="500"
                                    value={dados_formulario.mensagem}
                                    onChange={manipula_mudanca_texto}
                                    required>
                                </textarea>
                                <div className="invalid-feedback">
                                    Por favor, digite sua mensagem (Máx. 500 caracteres).
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="mb-3">
                                <p className="form-label">Preferência de contato <span className="text-danger">*</span>:</p>

                                <div className="form-check form-check-inline">
                                    <input type="checkbox" className="form-check-input" id="contato_ligacao" name="contato_ligacao" checked={dados_formulario.contato_ligacao} onChange={manipula_mudanca_checkbox} />
                                    <label className="form-check-label" htmlFor="contato_ligacao">Ligação</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input type="checkbox" className="form-check-input" id="contato_whatsapp" name="contato_whatsapp" checked={dados_formulario.contato_whatsapp} onChange={manipula_mudanca_checkbox} />
                                    <label className="form-check-label" htmlFor="contato_whatsapp">WhatsApp</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input type="checkbox" className="form-check-input" id="contato_email" name="contato_email" checked={dados_formulario.contato_email} onChange={manipula_mudanca_checkbox} />
                                    <label className="form-check-label" htmlFor="contato_email">E-mail</label>
                                </div>
                            </div>

                            <div className="form-check form-switch mb-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="atendimento_pcd" name="atendimento_pcd" checked={dados_formulario.atendimento_pcd} onChange={manipula_mudanca_checkbox} />
                                <label className="form-check-label" htmlFor="atendimento_pcd">Deseja Atendimento Preferencial (PCD)?</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg w-100">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaleConosco;
