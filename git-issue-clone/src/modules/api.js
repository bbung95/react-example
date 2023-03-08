import axios from "axios"

const endpoint = "https://api.github.com"

export const fetchIssueList = async ({ page, state, perPage }) => {
    const data = await axios.get(`${endpoint}/repos/facebook/react/issues`, {
        params: {
            page: page,
            state: state,
            per_page: perPage,
        },
    })

    return data
}

export const fetchIssueFilter = async (target) => {
    const data = await axios.get(
        `${endpoint}/repos/facebook/react/issues/${target.toLowerCase()}`,
    )

    return data
}
