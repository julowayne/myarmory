import axios from 'axios'

export class WowAPI {
  static characterList = axios.create({
    baseURL: 'https://eu.api.blizzard.com/'
  })

  static async get(path: string, params = {}) {
    try {
      const response = await this.characterList.get(path, { params })
      return response.data
    } catch (error: any) {
      if (error.response) {
        return error.response.status
      }
    }
  }

  static async getCharaterImages(path: string, params = {}) {
    try {
      const response = await this.characterList.get(path, { params })
      console.log(response.data.assets)
      return response.data.assets
    } catch (error: any) {
      if (error.response) {
        return error.response.status
      }
    }
  }
}
