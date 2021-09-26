import React, { useState, useEffect} from 'react';
import { post } from './util/apiClient';

const App = () => {
  const [comidaFavorita, setComidaFavorita] = useState('');
  const [rating, setRating] = useState(0);
  const [infoApi, setInfoApi] = useState(null);


  useEffect(() => {
    if(infoApi === null){
      const comidasFavoritasAPI = post('/ComidaFavorita');
      setInfoApi(comidasFavoritasAPI);
    }
  }, [infoApi]);

  const handleComidaFavorita = (e) => {
    setComidaFavorita(e.target.value);
  }
  const handleRating = (e) => {
    setRating(e.target.value);
  }

  const guardarInfoEnApi = () => {
    const informacionAGuardar = {
      comidaFavoritaRating: comidaFavorita,
      rating: Number(rating),
    };

    post('/ComidaFavorita', informacionAGuardar);
  }

  console.log({infoApi});
  return(
    <div style={{backgroundColor: '#fff'}}>
      <h1 style={{color: 'red'}}>Comida Favorita: {comidaFavorita}</h1>
      <h1 style={{color: 'red'}}>Rating: {rating}</h1>
      <p>Comida Favorita:</p>
      <input type="text" value={comidaFavorita} onChange={handleComidaFavorita} />
      <p>Rating (0-5)</p>
      <input type="number" value={rating} onChange={handleRating} />
      <button onClick={guardarInfoEnApi}>Guardar Info</button>
    </div>
  );
}
export default App;