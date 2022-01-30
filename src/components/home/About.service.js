import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cep-correios.p.rapidapi.com/busca-nova',
})

export const buscarCorreios = params => api.get('', {
    params: {
        cep: params,
    },
    headers: {
        'x-rapidapi-host': 'cep-correios.p.rapidapi.com',
        'x-rapidapi-key': '6087dbc8dcmsh7bbe556352ebc18p12b4ccjsn13f75c6bc7c2',
    },
})
