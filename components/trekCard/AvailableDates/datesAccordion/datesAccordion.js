import classNames from "classnames"


function dateOrdinal(d) {
  return d + (31 == d || 21 == d || 1 == d ? "st" : 22 == d || 2 == d ? "nd" : 23 == d || 3 == d ? "rd" : "th")
};


const batchDates = {
  full: "FULL",
  active: "ACTIVE",
  waitingList: "WAITING_LIST"
}


const DatesAccordion = ({ openAccordion, id, openAccordionNumber, data, month }) => {

  const monthDate = new Date(Number(month))
  const monthName = monthDate.toLocaleString('default', {
    month: 'long',
    year: "numeric"
  });

  return (
    <section className="accordion-section my-2">

      <div className="d-flex align-items-center accordion-header" onClick={() => openAccordion(id)}>

        <div className="mx-2 flex-grow-1">
          <p className="m-0 headingText">
            <b>{monthName}</b>
          </p>

        </div>
        <div className="mx-2">
          <i
            className="fa fa-angle-down accordion_arrow_icon fa-green-arrow"
            aria-hidden="true"
          ></i>
        </div>
      </div>

      {openAccordionNumber === id && <div>
        <div className='accordion-content'>
          {/* <div className='px-2 py-1 d-flex justify-content-between'>
                    <p className='dateText'>20th May to 28th May </p>
                    <p className='statusText statusAvailable'>Avail</p>
                </div> */}

          {
            data.map((batch, index) => {

              const startDate = new Date(batch.startDate)
              const endDate = new Date(batch.endDate)

              // const displayText = `${dateOrdinal(startDate.getDate())} ${startDate.toLocaleString('default', {month: 'short'})} to ${dateOrdinal(endDate.getDate())} ${endDate.toLocaleString('default', {month: 'short'})} `                  
              const displayText = `${dateOrdinal(startDate.getDate())} ${startDate.toLocaleString('default', { month: 'short' })} to ${dateOrdinal(endDate.getDate())} ${endDate.toLocaleString('default', { month: 'short' })} `


              return (<div className=' px-2 py-1 d-flex justify-content-between' key={index}>
                <p className='dateText me-3'>{displayText} </p>
                <p className={classNames('statusText',
                  {
                    statusFull: batch.status === batchDates.full,
                    statusWL: batch.status === batchDates.waitingList,
                    statusAvailable: batch.status === batchDates.active,
                  })}>
                  {batch.status === 'FULL' ? 'FULL' :
                    batch.status === 'WAITING_LIST' ? 'WL' : 'AVAIL'
                  }
                </p>
              </div>)


            })
          }


        </div>
      </div>}
    </section>
  )
}

export default DatesAccordion