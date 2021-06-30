import React, {useState, useEffect, useRef} from 'react'
//styles 
import {WrapMain} from './index.styles'
//images

import Left from '../assets/images/leftArrow'
import Right from '../assets/images/rightArrow'
//data
import Person from '../data'
//component
import PersonItem from '../components/person'

export default function Main() {
    const [list, setList] = useState(Person)
    // const [selected, setSelected] = useState(list[0])
    const [activeIndex, setActiveIndex] = useState(1)
    // const mySliderRef = useRef(null)
    useEffect(() => {
        const newActiveList = list.map((item, index) => {
            if(index === activeIndex -  1) {
                return {
                    ...item, className : "lastSlide" 
                }
            }
            else if(index === activeIndex ) {
                return {
                        ...item, className : "activeSlide" 
                }
            }
            return {
                ...item,
                className: "nextSlide"
            }
        })
        setList(newActiveList)
    }, [])
    useEffect(() => {

        const timer = setTimeout(() => handleNext(activeIndex), 1000);
        if(() => handlePrev(activeIndex)) {
            return () => {
                clearTimeout(timer)
            }
        }
    }, [activeIndex])
    const handlePrev = (itemIndex) => {
        let activeIndex = itemIndex - 1
        setActiveIndex(activeIndex)
        if(activeIndex < 0) {
            activeIndex = (list.length - 1)
            setActiveIndex(activeIndex)
        }

        const newList = list.map((item, index) => {
            if(index === activeIndex) {
                return {
                    ...item,
                    className: 'activeSlide'
                }
            }

            if (activeIndex - 1 > 0 && index === activeIndex - 1) {
                return {
                    ...item,
                    className: 'lastSlide'
                }
            }

            if(activeIndex - 1 < 0 && index === list.length - 1) {
                return {
                    ...item,
                    className: 'lastSlide'
                }
            }

            if((activeIndex - 1) === 0 && index === 0){
                return {
                    ...item,
                    className: 'lastSlide'
                }
            }

            return {
                ...item,
                className: 'nextSlide'
            }
        })
        setList(newList)
    }
    const handleNext = (itemIndex) => {
        let activeIndex = itemIndex + 1;
        setActiveIndex(activeIndex)
        if(activeIndex > list.length - 1) {
            activeIndex = 0;
            setActiveIndex(activeIndex)
        }
        const newList = list.map((item, index) => {
            if(index === activeIndex) {
                return {
                    ...item, className: "activeSlide"
                }
            }
            if (activeIndex - 1 > 0 && index === activeIndex - 1) {
                return {
                    ...item, className: "lastSlide"
                }
            }
            if (activeIndex - 1 < 0 && index === list.length -1 ) {
                return {
                    ...item, className: "lastSlide"
                }
            }
            if (activeIndex - 1 === 0 && index === 0){
                return {
                    ...item, className: "lastSlide"
                }
            }
            return {
                ...item, className: "nextSlide"
            }
        })
        setList(newList)
    }
    


    return (
        <WrapMain >
            <div className="title"><span>/</span> Reviews</div>
            <div className="wrap-slider" >
                {list.map((item, index) => (
                    <div className={`${item.className} slider`} key={index}>
                        <PersonItem  selectedPerson={item}/>
                    </div>
                ))}
                <button className="btn left" onClick={() => handlePrev(activeIndex)} >
                    <Left className="icon-left" />
                </button>
                <button className="btn right" onClick={() => handleNext(activeIndex)}>
                    <Right className="icon-right" />
                </button>
            </div>

        
        </WrapMain>
    )
}
