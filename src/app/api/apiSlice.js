import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// segundo o magrão o fetchbasequery seria a mesma coisa que utilizar AXIOS
//LOGO, estou dizendo que é para fazer os direcionamentos.

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }), //3500 é para quando development mode, nós estams em "homologação"
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})