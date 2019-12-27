import React from 'react'

let msg = (props) => {
    return (
        <div className={'text-right'}>
            {/* { props.user.name } */}
            { props.msg }
        </div>
    )
}

export default msg