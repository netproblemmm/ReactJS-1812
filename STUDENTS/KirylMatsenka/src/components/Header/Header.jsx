import React from 'react'

let header = (props) => {
    return (
        <header>
            <nav className={'navbar navbar-light bg-dark'}>
                <span className={'navbar-brand mb-0 h1 text-light'}>Messanger</span>
                <span className={'text-right text-light'}>Привет {props.user.name}</span>
            </nav>
        </header>
    )
}

export default header