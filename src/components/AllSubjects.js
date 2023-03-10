import React from 'react';
import all_subjects from '../data/allsubjects_data';

export function AllSubjects() {
    console.log(all_subjects);
    const listItems = all_subjects.map((item)=>
        <div className='card' key={item.id}>
            <div className='card_img'>
                <img src={item.thumb} />
            </div>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className='price'>{item.price}<span>{item.currency}</span></p>
                <div className='btn'>Pursue Course</div>
            </div>
        </div>
    );
    return (
        <div className='MyCourses'>
            {listItems}
        </div>
    )
}
