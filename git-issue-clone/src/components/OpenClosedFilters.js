import React, { useState } from "react"
import OpenClosedFilter from "./OpenClosedFilter"

const OpenClosedFilters = ({ data }) => {
    const [isOpenMode, setIsOpenMode] = useState(true)

    let openDateSize = 0
    let closedDateSize = 0

    return (
        <>
            <OpenClosedFilter
                isOpenMode={isOpenMode}
                setIsOpenMode={() => setIsOpenMode(true)}
                title="Open"
                size={openDateSize}
            ></OpenClosedFilter>
            <OpenClosedFilter
                isOpenMode={!isOpenMode}
                setIsOpenMode={() => setIsOpenMode(false)}
                title="Closed"
                size={closedDateSize}
            ></OpenClosedFilter>
        </>
    )
}

export default OpenClosedFilters
