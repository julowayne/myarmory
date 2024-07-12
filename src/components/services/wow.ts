import axios from 'axios'

export class WowAPI {
  
  static characterData = axios.create({
    baseURL: 'https://eu.api.blizzard.com/'
  })

  static authToken = axios.create({
    baseURL: 'https://oauth.battle.net/token'
  })

  static async get(path: string, params = {}) {
    try {
      const response = await this.characterData.get(path, { params })
      return response.data
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
          this.authToken.post('', {
            client_id: import.meta.env.VITE_CLIENT_ID,
            client_secret: import.meta.env.VITE_CLIENT_SECRET,
            grant_type: import.meta.env.VITE_API_GRANT_TYPE
          })
        }
        return error.response.status
      }
    }
  }

  static async post(path: string, params = {}) {
    try {
      const response = await this.authToken.post(path, { params })
      return response.data
    } catch (error: any) {
      if (error.response) {
        return error.response.status
      }
    }
  }

  static async getCharaterImages(path: string, params = {}) {
    try {
      const response = await this.characterData.get(path, { params })
      console.log(response.data.assets)
      return response.data.assets
    } catch (error: any) {
      if (error.response) {
        return error.response.status
      }
    }
  }
}
