

import React from "react";

const TicketCard = ({ ticket }) => {
  const priorityIcons = {
    4: "🚨", // Urgent
    3: "⚠️", // High
    2: "⚪", // Medium
    1: "⬜", // Low
    0: "⬛", // No priority
  };

  return (
    <div className="ticket-card">
      {/* Header with Ticket ID and Avatar */}
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <img
          className="ticket-avatar"
          src={ticket.assignedToAvatar || "default-avatar.png"}
          alt="Avatar"
        />
      </div>

      {/* Title */}
      <h3 className="ticket-title">{ticket.title}</h3>

      {/* Priority and Tag */}
      <div className="ticket-meta">
        <span className="ticket-priority">
          {priorityIcons[ticket.priority]} Priority:{" "}
          {["No priority", "Low", "Medium", "High", "Urgent"][ticket.priority]}
        </span>
        <span className="ticket-tag">{ticket.tag.join(", ")}</span>
      </div>
    </div>
  );
};

export default TicketCard;
