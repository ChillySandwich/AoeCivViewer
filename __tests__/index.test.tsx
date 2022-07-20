import React from 'react'
import { render, screen } from '@testing-library/react'
import  Civilizations  from '../pages/index'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import axios from 'axios'

const queryClient = new QueryClient()
axios.defaults.adapter = require('axios/lib/adapters/http')

describe('Home', () => {
    
  it('loads and displays civilizations', async () => {
    render( <QueryClientProvider client={queryClient}><Civilizations /></QueryClientProvider>)

    const scope = nock('http://localhost:3000')
    .get(`${process.env.NEXT_PUBLIC_CORS_ANYWHERE_ROUTE}https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)
    .reply(200)

    await axios.get(`http://localhost:3000/${process.env.NEXT_PUBLIC_CORS_ANYWHERE_ROUTE}https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)

    scope.done()

  })
}) 