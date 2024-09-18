import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Home } from "@/models/Home.js";

class HomesService {

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