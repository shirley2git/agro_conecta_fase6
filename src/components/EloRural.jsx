useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map-id').setView([-23.55, -46.63], 10);
      mapRef.current = map;

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(map);

      const truckIcon = L.divIcon({ html: '<div class="truck-marker">🚚</div>', className: 'main-truck' });
      truckRef.current = L.marker([-23.55, -46.63], { icon: truckIcon }).addTo(map);
    }
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

    const resp = await fetch(`https://router.project-osrm.org/route/v1/driving/${loc1.lon},${loc1.lat};${loc2.lon},${loc2.lat}?overview=full&geometries=geojson`);
    const routeData = await resp.json();
    const coords = routeData.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);

    if (routeLayerRef.current) mapRef.current.removeLayer(routeLayerRef.current);
    routeLayerRef.current = L.polyline(coords, { color: '#166534', weight: 5 }).addTo(mapRef.current);
    mapRef.current.fitBounds(routeLayerRef.current.getBounds());

    iniciarViagem(coords);
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
      truckRef.current.setLatLng(coords[i]);
      setMinutos(Math.max(0, Math.floor(45 * (1 - i / coords.length))));
      i += 2;
    }, 50);
  };

  return (
    <div className="elo-rural-wrapper"> {/* Container para isolar o CSS */}
      <div className="app-frame-elo">
        <aside className="side-panel-elo">
          <div className="header-logo-elo">Elo<span>Rural</span></div>
          <div className="card-elo">
            <label className="input-label-elo">Partida</label>
            <input className="input-field-elo" value={origemNome} onChange={e => setOrigemNome(e.target.value)} />
            <label className="input-label-elo">Destino</label>
            <input className="input-field-elo" value={destinoNome} onChange={e => setDestinoNome(e.target.value)} />
            <button className="btn-main-elo" onClick={confirmarCarga} disabled={status !== "aguardando"}>
              {status === "aguardando" ? "Confirmar Trajeto" : "Localizando..."}
            </button>
          </div>
          {status !== "aguardando" && status !== "carregando" && (
            <div className="card-elo animate-in">
              <h3 style={{color: '#166534'}}>R$ {(sacas * 45) + 1200},00</h3>
              <div className="eta-box-elo">
                <h2>{status === "entregue" ? "ENTREGUE" : `${minutos} min`}</h2>
              </div>
            </div>
          )}
        </aside>
        <main className="map-container-elo">
          <div id="map-id" style={{ width: '100%', height: '500px', borderRadius: '15px' }}></div>
        </main>
      </div>
    </div>
  );

export default EloRural;