import React from 'react'

//component
import Topic from '../../components/topic/topic'
import NavigationBar from '../../components/navbar/nav'
import DebtCard from '../../components/card/DebtCard'

//css
// import '../MySaving/Saving.css'
function Debt() {
    return (
        <>
            <Topic text="Debt" />
            <div className="row2">
                <DebtCard />
                <DebtCard />
            </div>

            <NavigationBar />
        </>
    )
}

export default Debt