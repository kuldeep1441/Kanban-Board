// // // src/components/Column.js
// // import React from "react";
// // import TicketCard from "./TicketCard";
// // import "../styles/column.css";

// // const Column = ({ title, availability, tickets }) => (
// //   <div className="column">
// //     <div className="column-header">
// //       <h3>{title}</h3>
// //       <p className="availability">{availability}</p>
// //       <span className="task-count">Tasks: {tickets.length}</span>
// //     </div>
// //     {tickets.map((ticket) => (
// //       <TicketCard key={ticket.id} ticket={ticket} />
// //     ))}
// //   </div>
// // );

// // export default Column;



// // import React from "react";
// // import "../styles/column.css";
// // import TicketCard from "./TicketCard";

// // const Column = ({ title, tickets }) => {
// //   return (
// //     <div className="column">
// //       <h2 className="column-title">
// //         {title} <span>({tickets.length})</span>
// //       </h2>
// //       <div className="ticket-list">
// //         {tickets.map((ticket) => (
// //           <TicketCard key={ticket.id} ticket={ticket} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Column;



// // import React from "react";
// // import "../styles/column.css"; // Optional: Add styles for the column

// // // const Column = ({ title, tickets }) => {
// // //   return (
// // //     <div className="column">
// // //       <h2 className="column-title">{title}</h2>
// // //       <div className="ticket-list">
// // //         {tickets.map((ticket) => (
// // //           <div key={ticket.id} className="ticket-card">
// // //             <h3>{ticket.title}</h3>
// // //             <p>{ticket.tag.join(", ")}</p>
// // //             <p>Status: {ticket.status}</p>
// // //             <p>Priority: {ticket.priority}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // const Column = ({ title, tickets = [] }) => {
// //   return (
// //     <div className="column">
// //       <h2 className="column-title">{title}</h2>
// //       <div className="ticket-list">
// //         {tickets.length ? (
// //           tickets.map((ticket) => (
// //             <div key={ticket.id} className="ticket-card">
// //               <h3>{ticket.title}</h3>
// //               <p>{ticket.tag.join(", ")}</p>
// //               <p>Status: {ticket.status}</p>
// //               <p>Priority: {ticket.priority}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No tickets available</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Column;




// import React from "react";

// const Column = ({ title, tickets }) => {
//   const priorityLabels = {
//     4: "Urgent",
//     3: "High",
//     2: "Medium",
//     1: "Low",
//     0: "No priority",
//   };

//   return (
//     <div className="column">
//       <div className="column-title">{title}</div>
//       <div className="tickets">
//         {tickets.map((ticket) => (
//           <div key={ticket.id} className="ticket">
//             <h4>{ticket.title}</h4>
//             <p>Priority: {priorityLabels[ticket.priority]}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Column;



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
