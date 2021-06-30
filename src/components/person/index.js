import React from 'react'
//styles
import {Wrap} from './index.styles'
//images
import Quotes from '../../assets/images/quotes'
export default function PersonItem({selectedPerson }) {

    return (
        <Wrap>
            <div className="wrap-person">
                <img src={`${selectedPerson.images}`} alt="avatar-default" className="avatar" />
                <div className="name">{selectedPerson.name}</div>
                <div className="pos">{selectedPerson.position}</div>
                <div className="description">{selectedPerson.description}</div>
                <Quotes className="icon" />
            </div>
        </Wrap>
    )
}
