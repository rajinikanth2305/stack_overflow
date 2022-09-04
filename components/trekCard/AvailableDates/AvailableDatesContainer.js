import classNames from "classnames";
import Link from "next/link";
import { useState } from 'react';
import { AvailableDatesStyle } from '../../../styles/availableDates';
import DatesAccordion from './datesAccordion';


export default function AvailableDatesContainer({ batchDates, url, mobile = false }) {
    const [openAccordionNumber, setOpenAccordionNumber] = useState(0)

    const openAccordion = (id) => {
        if (id === openAccordionNumber) return setOpenAccordionNumber(0)
        setOpenAccordionNumber(id)
    }

    let leftDateContainer = [], rightDateContainer = [];

    Object.entries(batchDates).forEach((val, index, arr) => {
        if (index >= arr.length / 2) {
            rightDateContainer.push(<DatesAccordion data={val[1]} month={val[0]} openAccordion={openAccordion} id={index + 1} openAccordionNumber={openAccordionNumber} />)
        } else {
            leftDateContainer.push(<DatesAccordion data={val[1]} month={val[0]} openAccordion={openAccordion} id={index + 1} openAccordionNumber={openAccordionNumber} />)
        }

    })




    return (
        leftDateContainer.length ?
            (
                <section className='mx-2 mt-2'>
                    <p className='grayText'>Available Dates</p>
                    <div className={classNames('mb-2', { 'date-flex-container': mobile })}>
                        <div className={classNames({ "halfWidth": mobile })}>
                            {leftDateContainer}
                        </div>
                        <div className={classNames({ "halfWidth": mobile })}>
                            {rightDateContainer}
                        </div>

                    </div>
                    <div>
                        <Link href={url ? `${url}#view-dates` : '#'}>
                            <a>
                                <p className='grayText underlinedText'>
                                    + <span>More Dates</span>
                                </p>
                            </a>
                        </Link>

                    </div>
                    <style jsx global>
                        {AvailableDatesStyle}
                    </style>
                </section>
            ) : null
    );
}