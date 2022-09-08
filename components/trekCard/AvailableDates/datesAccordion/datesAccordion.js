function dateOrdinal(d) {
  return (
    d +
    (31 == d || 21 == d || 1 == d
      ? "st"
      : 22 == d || 2 == d
        ? "nd"
        : 23 == d || 3 == d
          ? "rd"
          : "th")
  );
}

const batchDates = {
  full: "FULL",
  active: "ACTIVE",
  waitingList: "WAITING_LIST",
};

const DatesAccordion = ({
  openAccordion,
  id,
  openAccordionNumber,
  data,
  month,
}) => {
  const monthDate = new Date(Number(month));
  const monthName = monthDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="accordion-section my-2">
      <div
        className="d-flex align-items-center accordion-header"
        onClick={() => openAccordion(id)}
      >
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

      {openAccordionNumber === id && (
        <div>
          <div className="accordion-content">

            {data.map((batch, index) => {
              const startDate = new Date(batch.startDate);
              const endDate = new Date(batch.endDate);

              const displayText = `${dateOrdinal(
                startDate.getDate()
              )} ${startDate.toLocaleString("default", {
                month: "short",
              })} to ${dateOrdinal(endDate.getDate())} ${endDate.toLocaleString(
                "default",
                { month: "short" }
              )} `;

              const { familyTrek, availableSlots, status } = batch

              let statusText = ""
              let statusClass = `statusText `

              if (status === batchDates.full) {
                statusText = "FULL"
                statusClass = statusClass + `statusFull`
              } else if (status === batchDates.waitingList) {
                statusText = "WL"
                statusClass = statusClass + `statusWL`
              } else if (status === batchDates.active && availableSlots > 0 && availableSlots <= 5) {
                statusText = `LAST ${availableSlots}`
                statusClass = statusClass + `statusFillingFast`
              } else if (status === batchDates.active && availableSlots > 5) {
                statusText = "AVBL"
                statusClass = statusClass + `statusAvailable`
              }


              return (
                <div
                  className=" px-2 py-1 d-flex justify-content-between"
                  key={index}
                >
                  <div>
                    <p className="dateText">{displayText}</p>
                    {familyTrek && <p className="family-trek-text">{'(Family Trek)'} </p>}

                  </div>
                  <p
                    className={statusClass}
                  >
                    {statusText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default DatesAccordion;
