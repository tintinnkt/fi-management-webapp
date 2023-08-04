import React from 'react'
import dt from '../../service/data/DebtUser.json'

//component
import Topic from '../../components/topic/topic'
import NavigationBar from '../../components/navbar/nav'
import DebtCard from '../../components/card/DebtCard'

//css
// import '../MySaving/Saving.css'
function Debt() {
    const filteredData = dt.filter((debt) => debt.userid === 102)
    filteredData.sort((a, b) => a.id - b.id)
    return (
        <>
            <Topic text="Debt" />
            <div className="row2">
                {
                    filteredData.map((debt) => (
                        <DebtCard prop={debt} />
                    ))
                }
            </div>

            <NavigationBar />
        </>
    )
}

export default Debt