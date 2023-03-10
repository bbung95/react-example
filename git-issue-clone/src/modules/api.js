import axios from "axios"

const endpoint = "https://api.github.com"

export const fetchIssueList = async ({ page, state, perPage, labels }) => {
    const res = await axios.get(`${endpoint}/repos/facebook/react/issues`, {
        params: {
            page: page,
            state: state,
            per_page: perPage,
            labels: labels.join(","),
        },
    })

    return res
}

export const fetchIssueFilter = async (target) => {
    const res = await axios.get(
        `${endpoint}/repos/facebook/react/${target.toLowerCase()}s`,
        {
            params: {
                per_page: 100,
            },
        },
    )

    return res
}

export const fetchIssueAdd = async ({ title, body }) => {
    const res = await axios.post(
        `${endpoint}/repos/bbung95/react-example/issues`,
        {
            title: title,
            body: body,
        },
        {
            headers: {
                Authorization: process.env.REACT_APP_GITHUB_TOKEN,
                "Content-Type": "applications/json",
            },
        },
    )

    return res
}

export const fetchUserInfo = async () => {
    const res = await axios.get(`${endpoint}/user`, {
        headers: {
            Authorization: process.env.REACT_APP_GITHUB_TOKEN,
            "Content-Type": "applications/json",
        },
    })
    return res
}
