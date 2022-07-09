import axios from "axios"
import API_BASE_URL from "../../../constants"

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.nameOfToken = "lifetracker_token"
    }

    setToken(token) {
        this.token = token

        // localStorage data is specific to the 
        // protocol of the document. 
        // In particular, for a site loaded over HTTP (e.g., http://example.com), 
        // localStorage returns a different object than localStorage for the 
        // corresponding site loaded over HTTPS (e.g., https://example.com).

        localStorage.setItem(this.nameOfToken, token)
    }

    async request({ endpoint, method = 'GET', data = {} }) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }

        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const response = await axios({ url, method, data, headers })
            return {
                data: response.data,
                error: null
            }
        } catch (err) {
            const message = err?.response?.data?.error?.message
            return {
                data: null,
                error: message || String(err)
            }
        }

    }

    async listOfNutrition() {
        return await this.request({ endpoint: `nutrition`, method: `GET` })
    }

    async createNutrition(nutrition) {
        return await this.request({ endpoint: `nutrition/create`, method: `POST`, data: nutrition })
    }
    async listOfExercise() {
        return await this.request({ endpoint: `exercise`, method: `GET` })
    }

    async createExercise(exercise) {
        return await this.request({ endpoint: `exercise/create`, method: `POST`, data: exercise })
    }

    async loginUser(credentials) {
        return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
    }

    async logoutUser() {
        this.setToken(null)
        localStorage.setItem(this.tokenName, "")
    }

    async signupUser(credentials) {
        return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
    }

    async fetchUserFromToken() {
        return await this.request({ endpoint: `auth/me`, method: `GET` })
    }
}

export default new ApiClient(API_BASE_URL || "http://localhost:3001")