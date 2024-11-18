// // // // src/components/TicketCard.js
// // // import React from "react";
// // // import "../styles/ticketCard.css";

// // // const TicketCard = ({ ticket }) => (
// // //   <div className="ticket-card">
// // //     <h4>{ticket.title}</h4>
// // //     <p>{ticket.description}</p>
// // //     <span>Priority: {ticket.priority}</span>
// // //   </div>
// // // );

// // // export default TicketCard;


// // // import React from "react";
// // // import "../styles/ticketCard.css";

// // // const TicketCard = ({ ticket }) => {
// // //   return (
// // //     <div className="ticket-card">
// // //       <h3>{ticket.title}</h3>
// // //       <p>Type: {ticket.type}</p>
// // //       <p>Assigned to: {ticket.assignedTo || "Unassigned"}</p>
// // //       <p>Priority: {ticket.priority}</p>
// // //     </div>
// // //   );
// // // };

// // // export default TicketCard;



// // import React from "react";
// // import "../styles/ticketCard.css";

// // const TicketCard = ({ ticket }) => {
// //   const priorityIcons = {
// //     4: "🚨", // Urgent
// //     3: "⚠️", // High
// //     2: "⚪", // Medium
// //     1: "⬜", // Low
// //     0: "⬛", // No priority
// //   };


// //   return (
// //     <div className="ticket-card">
// //       <div className="ticket-header">
// //         <span className="ticket-id">{ticket.id}</span>
// //         <img
// //           className="ticket-avatar"
// //           src={ticket.assignedToAvatar || "default-avatar.png"}
// //           alt={ticket.assignedTo || "Unassigned"}
// //         />
// //       </div>
// //       <h3 className="ticket-title">{ticket.title}</h3>
// //       <div className="ticket-meta">
// //         <span className="ticket-priority">
// //           {priorityIcons[ticket.priority] || "⬜"} {ticket.type}
// //         </span>
// //         <span className="ticket-type">{ticket.type}</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TicketCard;


// import React from "react";
// import "../styles/ticketCard.css";

// const TicketCard = ({ ticket }) => {
//   const priorityIcons = {
//     4: "🚨", // Urgent
//     3: "⚠️", // High
//     2: "⚪", // Medium
//     1: "⬜", // Low
//     0: "⬛", // No priority
//   };

//   return (
//     <div className="ticket-card">
//       <div className="ticket-header">
//         <span className="ticket-id">{ticket.id}</span>
//         <img
//           className="ticket-avatar"
//           src={ticket.assignedToAvatar || "default-avatar.png"}
//           alt={ticket.assignedTo || "Unassigned"}
//         />
//       </div>
//       <h3 className="ticket-title">{ticket.title}</h3>
//       <div className="ticket-meta">
//         <span className="ticket-priority">
//           {priorityIcons[ticket.priority] || "⬜"} {ticket.type}
//         </span>
//         <span className="ticket-type">{ticket.type}</span>
//       </div>
//     </div>
//   );
// };

// export default TicketCard;


import React from "react";
import "../styles/ticketCard.css";

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
          alt={ticket.assignedTo || "Unassigned"}
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
