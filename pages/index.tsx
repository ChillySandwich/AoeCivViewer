import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import { MenuAppBar } from '../components/menuAppBar'
import { CivCard } from '../components/civCard'
import { SkeletonCard } from '../components/skeletonCard'
import { ICivilization } from '../interfaces/dataInterfaces'
import { useQuery } from "react-query";
import axios from "axios";


async function fetchPosts() {

  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CORS_ANYWHERE_ROUTE}https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)
  return data
}


const Home: NextPage = () => {
  const { isLoading, error, isError, data } = useQuery("getCivs", fetchPosts)

  if (isLoading) {
    return (
      <>
        <MenuAppBar />
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
      <MenuAppBar />
      <Grid container alignItems="right" justifyContent="right" spacing={3}>

        {
          data.civilizations.map((civ: ICivilization) => {
            return (

              <Grid item alignItems={"right"} justifyContent={"right"} xs={12} sm={6} md={4} xl={3} key={civ.id}>

                {isLoading ? <SkeletonCard /> : <CivCard name={civ.name} armyType={civ.army_type} teamBonus={civ.team_bonus} />}

              </Grid>

            )

          })

        }

      </Grid>
    </>
  )
}

export default Home
