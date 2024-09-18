import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { api } from "./AxiosService.js";

class HomesService {

  async getHomes(){
    try {
      const response = await api.get('/api/houses')
      logger.log(response.data)
    }
    catch (error){
      Pop.meow(error)
      logger.log(error)
    }
  }

}

export const homesService = new HomesService()