import axios from "axios"

const endpoint = "https://api.github.com"

const api = async () => {
    const data = await axios.get(`${endpoint}/repos/facebook/react/issues`, {
        params: {
            per_page: 25,
            page: 1,
            state: "open",
        },
    })

    console.log(data)

    return data
}

export default api
