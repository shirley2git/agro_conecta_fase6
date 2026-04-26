import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './EloRural.css';

const EloRural = () => {
  const [origemNome, setOrigemNome] = useState("");
  const [destinoNome, setDestinoNome] = useState("");
  const [status, setStatus] = useState("aguardando");
  const [minutos, setMinutos] = useState(45);
  const [sacas, setSacas] = useState(10);

  const mapRef = useRef(null);
  const truckRef = useRef(null);
  const markerOrigemRef = useRef(null);
  const markerDestinoRef = useRef(null);
  const routeLayerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Inicializa o mapa com coordenadas de São Paulo
      const map = L.map('map-id').setView([-23.55, -46.63], 10);
      mapRef.current = map;

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(map);

      // Ícone do caminhão
      const truckIcon = L.divIcon({ 
        html: '<div class="truck-marker">🚚</div>', 
        className: 'main-truck-container',
        iconSize: [30, 30]
      });
      truckRef.current = L.marker([-23.55, -46.63], { icon: truckIcon }).addTo(map);
    }

    // Corrige o bug do mapa não carregar as peças (tiles) corretamente
    setTimeout(() => {
      if (mapRef.current) mapRef.current.invalidateSize();
    }, 400);
  }, []);

  const buscarLocalizacao = async (nome) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(nome)}`);
      const data = await response.json();
      return (data && data.length > 0) ? { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) } : null;
    } catch { return null; }
  };

  const confirmarCarga = async () => {
    if (!origemNome || !destinoNome) return alert("Preencha origem e destino!");
    setStatus("carregando");
    
    const loc1 = await buscarLocalizacao(origemNome);
    const loc2 = await buscarLocalizacao(destinoNome);

    if (!loc1 || !loc2) {
      alert("Local não encontrado!");
      setStatus("aguardando");
      return;
    }

    if (markerOrigemRef.current) mapRef.current.removeLayer(markerOrigemRef.current);
    if (markerDestinoRef.current) mapRef.current.removeLayer(markerDestinoRef.current);
    
    markerOrigemRef.current = L.marker([loc1.lat, loc1.lon]).addTo(mapRef.current).bindPopup("Origem");
    markerDestinoRef.current = L.marker([loc2.lat, loc2.lon]).addTo(mapRef.current).bindPopup("Destino");

    try {
      const resp = await fetch(`https://router.project-osrm.org/route/v1/driving/${loc1.lon},${loc1.lat};${loc2.lon},${loc2.lat}?overview=full&geometries=geojson`);
      const routeData = await resp.json();
      const coords = routeData.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);

      if (routeLayerRef.current) mapRef.current.removeLayer(routeLayerRef.current);
      routeLayerRef.current = L.polyline(coords, { color: '#166534', weight: 5 }).addTo(mapRef.current);
      mapRef.current.fitBounds(routeLayerRef.current.getBounds());

      iniciarViagem(coords);
    } catch (error) {
      alert("Erro ao traçar rota!");
      setStatus("aguardando");
    }
  };

  const iniciarViagem = (coords) => {
    setStatus("em_transito");
    let i = 0;
    const interval = setInterval(() => {
      if (i >= coords.length) {
        clearInterval(interval);
        setStatus("entregue");
        return;
      }
      if (truckRef.current) {
        truckRef.current.setLatLng(coords[i]);
      }
      setMinutos(Math.max(0, Math.floor(45 * (1 - i / coords.length))));
      i += 1; // Velocidade da animação
    }, 40);
  };

  return (
    <div className="elo-rural-wrapper">
      <div className="app-frame-elo">
        <aside className="side-panel-elo">
          <div className="header-logo-elo">Elo<span>Rural</span></div>
          
          <div className="card-elo">
            <label className="input-label-elo">Ponto de Partida</label>
            <input 
              className="input-field-elo" 
              placeholder="Cidade ou endereço"
              value={origemNome} 
              onChange={e => setOrigemNome(e.target.value)} 
            />
            <label className="input-label-elo">Destino Final</label>
            <input 
              className="input-field-elo" 
              placeholder="Cidade ou endereço"
              value={destinoNome} 
              onChange={e => setDestinoNome(e.target.value)} 
            />
            <button className="btn-main-elo" onClick={confirmarCarga} disabled={status !== "aguardando"}>
              {status === "aguardando" ? "Rastrear Rota" : "Calculando..."}
            </button>
          </div>

          {status !== "aguardando" && status !== "carregando" && (
            <div className="card-elo animate-in">
              <h3 style={{color: '#166534', margin: '0 0 10px'}}>Frete: R$ {(sacas * 45) + 1200},00</h3>
              <div className="eta-box-elo">
                <p style={{fontSize: '0.9rem', margin: '0'}}>Previsão de Chegada:</p>
                <h2 style={{margin: '5px 0'}}>{status === "entregue" ? "✅ ENTREGUE" : `⏱️ ${minutos} min`}</h2>
              </div>
            </div>
          )}
        </aside>

        <main className="map-container-elo">
          <div id="map-id"></div>
        </main>
      </div>
    </div>
  );
};

export default EloRural;