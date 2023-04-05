import React from 'react'
import style from './Portofolio.module.css'
import { Tabs } from 'antd';
import WebDesignTab from '../WebDesignTab/WebDesignTab';
export default function Portofolio() {
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };
    const items = [
        { label: 'Web design', key: 'item-1', children: <WebDesignTab /> },
        { label: 'Mobile design', key: 'item-2', children: <WebDesignTab /> },
        { label: 'Photography', key: 'item-3', children: <WebDesignTab /> },
        { label: 'More', key: 'item-4', children: <WebDesignTab /> },
    ];
    return (
        <div className={`${style.body} portofolio text-center pb-5`}>
            <div className={` ${style.contBody}`}>
                <h2 className={`${style.title}`}>Our Portofolio</h2>
                <h6 className={`${style.titledDesc}`}>We{`’`}ve done lot{`’`}s of work, Let{`’`}s check some from here</h6>
                <Tabs className=' mt-5 ps-3 pe-3' items={items} />
            </div>
        </div>
    )
}
