import './App.css'
import agroLogo from './assets/agroLogo.png'
import agricultorJose from './assets/agricultorJose.png'
import donaRosa from './assets/donaRosa.png'
import FaleConosco from './components/FaleConosco'
import Calculadora from './components/Calculadora'
import ComponenteCard from './components/ComponenteCard'
import DesafiosCard from './components/DesafiosCard'
import RecursosCard from './components/RecursosCard'
import Pilar from './components/Pilar'
import DonaRosaChatBot from './components/DonaRosaChatBot'
import EloRural from './components/EloRural'

function App() {

  return (
    <>
      <header className="header" id="inicio">
        <div className="container navbar">
          <div className="logo">
            <img src={agroLogo} alt="AgroConecta Logo" />
            <span></span>
          </div>

          <nav className="nav-links">
            <ul>
              <li><a href="#problema">O Problema</a></li>
              <li><a href="#solucao">Solução</a></li>
              <li><a href="#recursos">Recursos</a></li>
              <li><a href="#fale-conosco">Fale Conosco</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>AgroConecta</h1>
          <h2>Conectando Conhecimento e Tecnologia</h2>
          <p>Combatendo a vulnerabilidade do pequeno agricultor brasileiro e apoiando o ODS 2 da ONU – Fome Zero.</p>
          <p>Transformando a agricultura familiar através de tecnologia acessível e educação.</p>

          <div className="hero-buttons">
            <a href="#solucao" className="btn btn-primary">Conheça a Solução</a>
            <a href="#fale-conosco" className="btn btn-secondary">Fale Conosco</a>
            <a href="#calculadora" className="btn btn-secondary">Calculadora</a>
          </div>
        </div>
      </section>


      <section>
        <div className="separator-bar"></div>

        <section className="problema-section" id="problema">
          <div className="container">
            <div className="problema-header">
              <div className="badge-desafio">O Desafio</div>

              <h2>A Vulnerabilidade do Pequeno Agricultor Brasileiro</h2>
              <p className="problema-description">
                Os pequenos agricultores familiares, espinha dorsal da agricultura brasileira, enfrentam desafios multifacetados que comprometem sua subsistência e a segurança alimentar do país.
              </p>
            </div>

            <div className="desafios-cards">

              <DesafiosCard
                icon="☁️"
                title="Variações Climáticas"
                description="Secas prolongadas e inundações repentinas resultam em perdas significativas de colheitas e prejuízos financeiros."
              />

              <DesafiosCard
                icon="📈"
                title="Acesso Limitado à Informação"
                description="Falta de ferramentas de monitoramento em tempo real para condições do solo, clima e alertas de pragas."
              />

              <DesafiosCard
                icon="💧"
                title="Uso Ineficiente de Recursos"
                description="Uso excessivo de água e defensivos agrícolas, elevando custos de produção e causando impactos ambientais."
              />

            </div>

            <div className="publico-alvo-box">
              <h3>Nosso Público-Alvo</h3>
              <div className="alvo-content">

                <div className="alvo-left">
                  <h4>Pequenos Agricultores Familiares Brasileiros</h4>
                  <ul>
                    <li>Dependência da agricultura como principal fonte de renda</li>
                    <li>Propriedades limitadas sem tecnologias e técnicas avançadas</li>
                    <li>Restrições financeiras e de acesso a insumos modernos</li>
                    <li>Dificuldade com monitoramento climático e gestão de recursos.</li>
                  </ul>
                </div>

                <div className="alvo-right">
                  <div className="persona-card">
                    <img src={agricultorJose} alt="José de Almeida" className="persona-img" />
                    <h4>José da Almeida</h4>
                    <p className="persona-subtitle">55 anos - Minas Gerais</p>
                    <p className="persona-role">Pequeno Agricultor Familiar</p>
                    <p className="persona-quote">"Precisamos de soluções práticas que ajudem com resultados imediatos e que sejam fáceis de usar."</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

      </section>

      <section className="solucao-section" id="solucao">
        <div className="container">
          <div className="solucao-header">
            <div className="badge-solucao">A Solução</div>

            <h2>AgroConecta: Conectando Conhecimento e Tecnologia</h2>
            <p className="solucao-description">
              Uma plataforma completa que combina assistência virtual, educação digital e inteligência artificial para transformar a agricultura familiar brasileira.
            </p>
          </div>

          <div className="dona-rosa-card">
            <div className="rosa-image">
              <img src={donaRosa} alt="Assistente Virtual Dona Rosa" />
            </div>

            <div className="rosa-content">
              <h3>Conheça a Dona Rosa</h3>
              <p>Nossa assistente virtual foi criada para ser a companheira de confiança dos agricultores. Com linguagem simples e acolhedora, Dona Rosa está sempre disponível via Telegram para ajudar com:</p>

              <ul>
                <li>Alertas climáticos em tempo real</li>
                <li>Orientações sobre plantio e colheita</li>
                <li>Dicas de gestão e otimização de recursos</li>
                <li>Conexão com a rede de apoio e educação</li>
              </ul>
            </div>
          </div>

          <DonaRosaChatBot />

          <div className="componentes-cards">

            <ComponenteCard
              icon="💬"
              title="Assistente Virtual Dona Rosa"
              description="Chatbot via Telegram com linguagem simples e acessível, fornecendo orientações práticas sobre plantio, clima e gestão."
            />

            <ComponenteCard
              icon="🎓"
              title="Educação Digital SENAR"
              description="Direcionamento para cursos e recursos educacionais da plataforma SENAR, capacitando agricultores com conhecimento técnico."
            />

            <ComponenteCard
              icon="🧠"
              title="IA para Recomendações"
              description="Chatbot via Telegram com linguagem simples e acessível, fornecendo orientações práticas sobre plantio, clima e gestão."
            />

            <ComponenteCard
              icon="🧑‍🤝‍🧑"
              title="Rede Elo Rural"
              description="Direcionamento para cursos e recursos educacionais da plataforma SENAR, capacitando agricultores com conhecimento técnico."
            />

          </div>

        </div>
      </section>

      <section className="recursos-section" id="recursos">
        <div className="container">
          <div className="recursos-header">
            <h2>Recursos e Benefícios Práticos</h2>
            <p className="recursos-description">
              Ferramentas e funcionalidades desenvolvidas para empoderar o agricultor familiar com tecnologia acessível e conhecimento aplicável.
            </p>
          </div>

          <div className="recursos-cards">

            <RecursosCard
              icon="🚨"
              title="Alertas Climáticos"
              description="Notificações em tempo real sobre condições meteorológicas, previsões de chuva, temperatura e alertas de eventos extremos."
            />

            <RecursosCard
              icon="📚"
              title="Educação Digital"
              description="Acesso direto a cursos do SENAR sobre técnicas agrícolas, gestão rural, sustentabilidade e empreendedorismo."
            />

            <RecursosCard
              icon="💧"
              title="Otimização de Recursos"
              description="Recomendações personalizadas para uso eficiente de água, fertilizantes e defensivos, reduzindo custos e impacto ambiental."
            />
            <RecursosCard
              icon="📱"
              title="Interface Intuitiva"
              description="Design simples e acessível, desenvolvido especialmente para usuários com pouca familiaridade tecnológica."
            />

          </div>

          <div className="acessibilidade-box">
            <h4>Intuitividade e Acessibilidade</h4>
            <p className="acessibilidade-intro">
              O AgroConecta foi projetado pensando em usuários com pouca ou nenhuma familiaridade com tecnologia digital. Nossa interface preza:
            </p>

            <div className="acessibilidade-pilares">

              <Pilar
                title="Simplicidade"
                description="Navegação clara com poucos cliques para executar tarefas."
              />

              <Pilar
                title="Linguagem Acessível"
                description="Termos técnicos traduzidos para linguagem do dia a dia."
              />

              <Pilar
                title="Foco no Essencial"
                description="Informações diretas e práticas, sem complexidade desnecessária."
              />
            </div>
          </div>

          <div className="parcerias-bloco">
            <h3>Parcerias Estratégicas</h3>

            <div className="parcerias-list">
              <div className="parceria-item">
                <h5>SENAR</h5>
                <p>Serviço Nacional de Aprendizagem Rural - educação e capacitação.</p>
              </div>
              <div className="parceria-item">
                <h5>Elo Rural</h5>
                <p>Plataforma de logística e cooperação entre agricultores.</p>
              </div>
              <div className="parceria-item">
                <h5>APIs Meteorológicas</h5>
                <p>Dados climáticos precisos e atualizados em tempo real.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>

        <Calculadora />

        <FaleConosco />

      <section className="secao-mapa-integrada" style={{padding: '40px 0', background: '#fff'}}>
        <div className="container">
          <h2 style={{color: '#79a63c', textAlign: 'center', marginBottom: '20px'}}>
            Acompanhe a Carga em Tempo Real
          </h2>
          <EloRural /> 
        </div>
      </section>

        <footer className="footer">
          <div className="container footer-grid">

            <div className="footer-col footer-info">
              <div className="footer-logo">
                <img src={agroLogo} alt="AgroConecta Logo" className="logo-footer-img" />
              </div>
              <p>Conectando conhecimento e tecnologia para transformar a agricultura familiar brasileira.</p>
            </div>

            <div className="footer-col footer-links">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#problema">O Problema</a></li>
                <li><a href="#solucao">Solução</a></li>
                <li><a href="#recursos">Recursos</a></li>
                <li><a href="#fale-conosco">Fale Conosco</a></li>
              </ul>
            </div>

            <div className="footer-col footer-missao">
              <h4>Nossa Missão</h4>
              <p>Apoiando o ODS 2 da ONU – Fome Zero e Agricultura Sustentável.</p>
              <p className="missao-meta">Meta 2.3: Até 2030, dobrar a produtividade agrícola e a renda dos pequenos produtores.</p>
            </div>

          </div>
        </footer>
      </section>
    </>
  )
}

export default App
