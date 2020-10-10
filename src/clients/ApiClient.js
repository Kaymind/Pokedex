import axios from 'axios';
// import { Deserializer } from 'jsonapi-serializer';

// const deserializer = new Deserializer({ keyForAttribute: 'camelCase' });

export class ApiClient {
  constructor() {
    this.baseURL = 'https://pokeapi.co/api/v2/';
    this.client = axios.create({ baseURL: this.baseURL });

    this.setupClient();
  }

  get token() {
    return localStorage.getItem('token');
  }

  set token(token) {
    if (typeof token === 'undefined' || token === null) {
      localStorage.removeItem('token');
      return;
    }

    localStorage.setItem('token', token);
  }

  setupClient() {
    this.client.interceptors.request.use((config) => {
      if (this.token) {
        return this.configWithAuthorization(config, this.token);
      }

      return config;
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }

  configWithAuthorization(config, token) {
    const { headers = {} } = config;

    if (headers.Authoriztion) {
      return config;
    }

    return {
      ...config,
      headers: this.injectAuthorizationToken(headers, token),
    };
  }

  injectAuthorizationToken(headers, token) {
    return { ...headers, Authorization: `Bearer ${token}` };
  }

  async login({ email, password }) {
    return this.client
      .post('/login', {
        user: { email, password },
      })
      .then((response) => {
        this.token = response.data.token;
        return response.data;
      });
  }

  async getAllPokemon(filterValue) {
    const result = await this.client.get(
      `/pokemon?limit=${filterValue}&offset=200`
    );
    const data = result.data.results;
    return data;
  }

  async getPokemonDetail(pokemonId) {
    const result = await this.client.get(`/pokemon/${pokemonId}`);
    const data = result.data;
    return data;
  }
}
