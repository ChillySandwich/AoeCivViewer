//returns a list of civilizations 

import { NextApiRequest, NextApiResponse } from 'next';


const getCivilizations = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/civilizations`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        const civilizations = await response.json();
    
        res.status(response.status).json({
          data: civilizations
        }); 
        return;      
      }

  catch (err) {
      console.error(err);
      res.status(500).json({ "message": "internal server error" }); 
      return;
  }
}

const civilizations = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // -----------------------------------  
      getCivilizations(req, res);
  }

};

export default civilizations;
