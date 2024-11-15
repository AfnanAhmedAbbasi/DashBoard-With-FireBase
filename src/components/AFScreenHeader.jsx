import React from 'react'

const AFScreenHeader = (props) => {
    const { Title, actionButtons = [], backButton = [] ,button } = props
    return (
        <div className="rounded-lg p-5 mb-2 bg-[lightgrey] flex justify-between items-center h-20 w-full">
            {backButton.map((x) => x.button())}
            {/* <button>{button}</button> */}
            <h1 className="text-3xl">

                {Title}
            </h1>
            {actionButtons.map((x) => x.display())}
        </div>
    )
}

export default AFScreenHeader
