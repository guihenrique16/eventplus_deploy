/**
 *  Modulo para trabalhar com apis. Disponibiliza as rotas da api bem como o servico com a biblioteca axios
 */
import axios from "axios";


/**
 *  Rota para o recurso eventos
 */
export const eventsResource = '/Evento'

// Rota para login
export const LoginResource = '/login'

// Rota para Home
export const HomeResource = '/'

// https://eventwebapiguigarbelini.azurewebsites.net/api/PresencaEvento/ListarMinhas/e704780d-2867-48b4-6a02-08dbfbdd427d
// https://eventwebapiguigarbelini.azurewebsites.net/api/PresencasEvento/ListarMinhas/865c6f69-ba32-4c5a-6a03-08dbfbdd427d



export const myEventsResource = '/PresencaEvento/ListarMinhas'

export const CommentaryResource = '/ComentariosEvento/BuscarPorIdUsuario'

//Rota para o recurso Listar Presenças Evento
export const presencesEventsResource = 'PresencaEvento'

// Rota para Instituicao
export const IstituicaoResource = '/instituicao'
/**
 *  Rota para o recurso proximos eventos
 */
export const nextEventResource = '/Evento/ListarProximos'

/**
 *  Rota para o recurso tipos eventos
 */
export const eventsTypeResource = '/TiposEvento'

const apiPort = '5000';
// const localApiUri = `http://localhost:${apiPort}/api`;
const externallApiUri = `https://eventwebapiguigarbelini.azurewebsites.net/api`;
// const externalApiUri = null;

const api = axios.create({
    baseURL: externallApiUri
});



export default api;