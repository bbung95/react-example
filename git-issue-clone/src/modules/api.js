import axios from "axios"

const endpoint = "https://api.github.com"

export const fetchIssueList = async ({ page, state, perPage, labels }) => {
    const data = await axios.get(`${endpoint}/repos/facebook/react/issues`, {
        params: {
            page: page,
            state: state,
            per_page: perPage,
            labels: labels.join(","),
        },
    })

    return data
}

export const fetchIssueFilter = async (target) => {
    const data = await axios.get(
        `${endpoint}/repos/facebook/react/${target.toLowerCase()}s`,
        {
            params: {
                per_page: 100,
            },
        },
    )

    return data
}
