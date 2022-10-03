import React from 'react'
import classNames from 'classnames'


const PaginationSection = ({ totalNumberOfPages, activePage, onPageChange }) => {
    return (
        <div className='d-flex pagination'>
            {Array.from({ length: totalNumberOfPages }, (_, i) => i + 1).map(num =>
                <button className={classNames('paginationButtons', { active: num === activePage })} key={num} onClick={() => onPageChange(num)}>
                    {num}
                </button>
            )}
        </div>
    )
}

export default PaginationSection