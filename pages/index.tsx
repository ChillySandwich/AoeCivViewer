import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import { MenuAppBar } from '../components/menuAppBar'
import { CivCard } from '../components/civCard'
import { SkeletonCard } from '../components/skeletonCard'
import { ICivilization } from '../interfaces/dataInterfaces'
import { useQuery } from "react-query";
import axios from "axios";


async function fetchCiv() {

  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CORS_ANYWHERE_ROUTE}https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)
  return data
}


const Civilizations: NextPage = () => {
  const { isLoading, error, isError, data } = useQuery("getCivs", fetchCiv)

  if (isLoading) {
    return (
      <>
        <MenuAppBar name={"Age of Empires II Civilizations"}/>
        <Grid container justifyContent='center' alignItems= "center" spacing={1}>

          <Grid item xs={12} sm={6} md={4} xl={3}>
            <SkeletonCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <SkeletonCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <SkeletonCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <SkeletonCard />
          </Grid>

        </Grid>
      </>
    )
  }
  if (isError) {
    return <div>Error!</div>
  }


  return (
    <>
      <MenuAppBar name={"Age of Empires II Civilizations"}/>
      <Grid container spacing={3} sx={{alignItems:'flex-between'}}>

        {
          data.civilizations.map((civ: ICivilization) => {
            return (

              <Grid item sx={{justifyContent: 'center'}} xs={12} sm={6} md={4} xl={3} key={civ.id}>

                <CivCard data-testid={civ.id} id={civ.id} name={civ.name} armyType={civ.army_type} teamBonus={civ.team_bonus} />

              </Grid>

            )

          })

        }

      </Grid>
    </>
  )
}

export default Civilizations
