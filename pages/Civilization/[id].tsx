import { Box } from '@mui/material'
import React from 'react'
import { MenuAppBar } from '../../components/menuAppBar'

// NEXTJS
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from 'react-query';



async function fetchCivDetail(id: string) {

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CORS_ANYWHERE_ROUTE}https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
    return data
  }
  

const CivilizationDetail = () => {

    const router = useRouter()
    const { id } = router.query

    const { isLoading, error, isError, data } = useQuery(['getCivDetail', id], () => fetchCivDetail(id as string))

    console.log(data)

  return (
    <>
    <MenuAppBar name={data.name}/>
    <Box >

    </Box>
    <Box sx={{width: "400px", height: '50vh', borderRadius:'5px', backgroundColor: 'white'}}>

    
        
    </Box>
    </>
  )
}

export default CivilizationDetail