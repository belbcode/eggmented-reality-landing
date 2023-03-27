import "../styles/partner.css"

import React, { useEffect, useState } from 'react';

interface ItemType {
    src: string,
    url: string,
}


const Marquee = ({ items, refInstance }: { items: Array<Object> , refInstance: any}) => {

    const [left, setLeft] = useState(64)
    const [i, setI] = useState(0)

    useEffect(() => {

        setTimeout(() => {
            if (i > items.length - 4) {
                setLeft(64)
                setI(0)
                return
            }
            setLeft(prev => prev - 16)
            setI(i + 1)
        }, 3000)
    }, [i])

    return (
        <div ref={refInstance} className="partners">
            <h1 style={{ padding: '1rem' }}>Our Partners</h1>
            <div className="marquee-container" style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
                <div className="marquee" style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '48rem' }}>
                    {items.map((item: any) => <Item src={item.src} url={item.url} left={left} />)}
                </div>
            </div>
        </div>
    )
}

const Item = ({ src, url, left }: { src: string, url: string, left: number }) => {
    return (
        <div className="img-containerz" style={{ left: left + 'rem' }} onClick={() => window.open(url, '_blank').focus() }>
            <img src={src} alt="" />
        </div>
    )
}


export default Marquee;