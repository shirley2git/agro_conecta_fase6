import './DonaRosaChatBot.css';
import React, { useState } from 'react';
import respostas_padrao from './DonaRosaChatBotRespostas.json';

function DonaRosaChatBot() {
    const [historico_conversa, set_historico_conversa] = useState([{
        texto: 'Ola! Sou a Dona Rosa. Como posso ajudar?',
        remetente: 'bot'
    }]);

    const [mensagem_usuario, set_mensagem_usuario] = useState('');
    const [estado_mostrar_chatbot, set_estado_mostrar_chatbot] = useState(true);

    function enviar_mensagem_chatbot() {
        if (mensagem_usuario.trim() === '')
            return;

        let msg_usuario = {
            texto: mensagem_usuario,
            remetente: 'usuario'
        };

        let historico_conversa_atual = [msg_usuario, ...historico_conversa];
        set_historico_conversa(historico_conversa_atual)

        const referencia = mensagem_usuario.toLowerCase();
        const categoria = respostas_padrao.data.find(categoria_json =>
            categoria_json.palavra_chave.some(palavra => referencia.includes(palavra.toLowerCase()))
        );

        let msg_bot;
        if (categoria) {
            msg_bot = {
                texto: categoria.resposta,
                remetente: 'bot'
            }
        } else {
            msg_bot = {
                texto: 'Desculpe, não entendi sua pergunta. Poderia reformular ou perguntar sobre outro assunto?',
                remetente: 'bot'
            }
        }

        historico_conversa_atual = [msg_bot, ...historico_conversa_atual];

        setTimeout(() => set_historico_conversa(historico_conversa_atual), 1500);
        set_mensagem_usuario('');
    }

    function alterar_estado_mostrar_chatbot() {
        set_estado_mostrar_chatbot(!estado_mostrar_chatbot);
    }

    return (
        <div className="dona-rosa-chatbot">

            {estado_mostrar_chatbot && (
                <div className="chat-window mb-1 p-1 bg-white">
                    {historico_conversa.map((msg, index) => (
                        <div key={index} className={`message ${msg.remetente}`}>
                            <strong>{msg.remetente === 'bot' ? 'Dona Rosa: ' : 'Você: '}</strong> {msg.texto}
                        </div>
                    ))}
                </div>
            )}

            {estado_mostrar_chatbot && (
                <textarea
                    className="form-control"
                    value={mensagem_usuario}
                    onChange={(evento) => set_mensagem_usuario(evento.target.value)}
                    placeholder="Digite sua mensagem..."
                    rows="1"
                />
            )}

            {estado_mostrar_chatbot && (
                <button className='enviar_mensagem btn-success mt-2' onClick={enviar_mensagem_chatbot}>
                    Enviar
                </button>
            )}


            <button className={estado_mostrar_chatbot ? "esconder-mostrar btn alert-danger mt-2" : "esconder-mostrar btn alert-info mt-2"} onClick={alterar_estado_mostrar_chatbot}>
                {estado_mostrar_chatbot ? "X" : "^"}
            </button>
        </div>
    )
};

export default DonaRosaChatBot;
