


import React from "react";
import TicketCard from "./TicketCard";

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <div className="column-title">{title}</div>
      <div className="tickets">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
