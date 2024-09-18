import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Home } from "@/models/Home.js";

class HomesService {

 async deleteHome(homeId) {
  try {
    const response = await api.delete(`api/houses/${homeId}`)
    logger.log('Deleting', response.data)    
    const homeIndex = AppState.cars.findIndex(home => home.id == homeId)
    AppState.homes.slice(homeIndex, 1)
  }
  catch (error){
    Pop.meow(error);
    logger.log(error)    
  }
}

async getHomes(){
    try {
      const response = await api.get('/api/houses')
      logger.log(response.data)
      const newHomes = response.data.map(homePojo => new Home(homePojo))
      AppState.homes = newHomes
    }
    catch (error){
      Pop.meow(error)
      logger.log(error)
    }
  }

}

export const homesService = new HomesService()