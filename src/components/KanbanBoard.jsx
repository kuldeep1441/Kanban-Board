


// // // // import React, { useState, useEffect } from "react";
// // // // import { fetchTickets } from "../api";
// // // // import Column from "./Column";
// // // // import "../styles/kanbanBoard.css";

// // // // const KanbanBoard = () => {
// // // //   const [tickets, setTickets] = useState([]);
// // // //   const [users, setUsers] = useState([]);
// // // //   const [groupBy, setGroupBy] = useState(
// // // //     () => localStorage.getItem("groupBy") || "user"
// // // //   ); // Retrieve from localStorage
// // // //   const [sortBy, setSortBy] = useState(
// // // //     () => localStorage.getItem("sortBy") || "priority"
// // // //   ); // Retrieve from localStorage

// // // //   useEffect(() => {
// // // //     const loadData = async () => {
// // // //       const data = await fetchTickets();
// // // //       setTickets(data.tickets);
// // // //       setUsers(data.users);
// // // //     };
// // // //     loadData();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     localStorage.setItem("groupBy", groupBy);
// // // //   }, [groupBy]);

// // // //   useEffect(() => {
// // // //     localStorage.setItem("sortBy", sortBy);
// // // //   }, [sortBy]);

// // // //   const sortTickets = (tickets) => {
// // // //     if (sortBy === "priority") {
// // // //       return [...tickets].sort((a, b) => b.priority - a.priority);
// // // //     }
// // // //     if (sortBy === "title") {
// // // //       return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
// // // //     }
// // // //     return tickets;
// // // //   };

// // // //   const groupTickets = () => {
// // // //     const grouped = {};
// // // //     switch (groupBy) {
// // // //       case "status":
// // // //         tickets.forEach((ticket) => {
// // // //           if (!grouped[ticket.status]) grouped[ticket.status] = [];
// // // //           grouped[ticket.status].push(ticket);
// // // //         });
// // // //         break;
// // // //       case "user":
// // // //         users.forEach((user) => {
// // // //           grouped[user.name] = [];
// // // //         });
// // // //         tickets.forEach((ticket) => {
// // // //           const user = users.find((u) => u.id === ticket.userId);
// // // //           const key = user ? user.name : "Unassigned";
// // // //           if (!grouped[key]) grouped[key] = [];
// // // //           grouped[key].push(ticket);
// // // //         });
// // // //         break;
// // // //       case "priority":
// // // //         tickets.forEach((ticket) => {
// // // //           const priority =
// // // //             ticket.priority === 4
// // // //               ? "Urgent"
// // // //               : ticket.priority === 3
// // // //               ? "High"
// // // //               : ticket.priority === 2
// // // //               ? "Medium"
// // // //               : ticket.priority === 1
// // // //               ? "Low"
// // // //               : "No priority";
// // // //           if (!grouped[priority]) grouped[priority] = [];
// // // //           grouped[priority].push(ticket);
// // // //         });
// // // //         break;
// // // //       default:
// // // //         break;
// // // //     }
// // // //     return Object.entries(grouped).map(([key, tickets]) => ({
// // // //       title: key,
// // // //       tickets: sortTickets(tickets),
// // // //     }));
// // // //   };

// // // //   const groupedTickets = groupTickets();

// // // //   return (
// // // //     <div className="kanban-board">
// // // //       <div className="controls">
// // // //         <label>Group by:</label>
// // // //         <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
// // // //           <option value="status">Status</option>
// // // //           <option value="user">User</option>
// // // //           <option value="priority">Priority</option>
// // // //         </select>

// // // //         <label>Sort by:</label>
// // // //         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
// // // //           <option value="priority">Priority</option>
// // // //           <option value="title">Title</option>
// // // //         </select>
// // // //       </div>

// // // //       <div className="columns">
// // // //         {groupedTickets.map((group) => (
// // // //           <Column
// // // //             key={group.title}
// // // //             title={group.title}
// // // //             availability=""
// // // //             tickets={group.tickets}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default KanbanBoard;




// // // // import React, { useState, useEffect } from "react";
// // // // import { fetchTickets } from "../api";
// // // // import Column from "./Column";
// // // // import "../styles/kanbanBoard.css";

// // // // const KanbanBoard = () => {
// // // //   const [tickets, setTickets] = useState([]);
// // // //   const [users, setUsers] = useState([]);
// // // //   const [groupBy, setGroupBy] = useState(
// // // //     () => localStorage.getItem("groupBy") || "status"
// // // //   );
// // // //   const [sortBy, setSortBy] = useState(
// // // //     () => localStorage.getItem("sortBy") || "priority"
// // // //   );

// // // //   useEffect(() => {
// // // //     const loadData = async () => {
// // // //       const data = await fetchTickets();
// // // //       setTickets(data.tickets);
// // // //       setUsers(data.users);
// // // //     };
// // // //     loadData();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     localStorage.setItem("groupBy", groupBy);
// // // //   }, [groupBy]);

// // // //   useEffect(() => {
// // // //     localStorage.setItem("sortBy", sortBy);
// // // //   }, [sortBy]);

// // // //   const sortTickets = (tickets) => {
// // // //     if (sortBy === "priority") {
// // // //       return [...tickets].sort((a, b) => b.priority - a.priority);
// // // //     }
// // // //     if (sortBy === "title") {
// // // //       return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
// // // //     }
// // // //     return tickets;
// // // //   };

// // // //   const groupTickets = () => {
// // // //     const grouped = {};
// // // //     switch (groupBy) {
// // // //       case "status":
// // // //         tickets.forEach((ticket) => {
// // // //           if (!grouped[ticket.status]) grouped[ticket.status] = [];
// // // //           grouped[ticket.status].push(ticket);
// // // //         });
// // // //         break;
// // // //       case "user":
// // // //         users.forEach((user) => {
// // // //           grouped[user.name] = [];
// // // //         });
// // // //         tickets.forEach((ticket) => {
// // // //           const user = users.find((u) => u.id === ticket.userId);
// // // //           const key = user ? user.name : "Unassigned";
// // // //           if (!grouped[key]) grouped[key] = [];
// // // //           grouped[key].push(ticket);
// // // //         });
// // // //         break;
// // // //       case "priority":
// // // //         tickets.forEach((ticket) => {
// // // //           const priority =
// // // //             ticket.priority === 4
// // // //               ? "Urgent"
// // // //               : ticket.priority === 3
// // // //               ? "High"
// // // //               : ticket.priority === 2
// // // //               ? "Medium"
// // // //               : ticket.priority === 1
// // // //               ? "Low"
// // // //               : "No priority";
// // // //           if (!grouped[priority]) grouped[priority] = [];
// // // //           grouped[priority].push(ticket);
// // // //         });
// // // //         break;
// // // //       default:
// // // //         break;
// // // //     }
// // // //     return Object.entries(grouped).map(([key, tickets]) => ({
// // // //       title: key,
// // // //       tickets: sortTickets(tickets),
// // // //     }));
// // // //   };

// // // //   const groupedTickets = groupTickets();

// // // //   return (
// // // //     <div className="kanban-board">
// // // //       <div className="controls">
// // // //         <div className="dropdown">
// // // //           <label>Grouping:</label>
// // // //           <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
// // // //             <option value="status">Status</option>
// // // //             <option value="user">User</option>
// // // //             <option value="priority">Priority</option>
// // // //           </select>
// // // //         </div>
// // // //         <div className="dropdown">
// // // //           <label>Ordering:</label>
// // // //           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
// // // //             <option value="priority">Priority</option>
// // // //             <option value="title">Title</option>
// // // //           </select>
// // // //         </div>
// // // //       </div>

// // // //       <div className="columns">
// // // //         {groupedTickets.map((group) => (
// // // //           <Column
// // // //             key={group.title}
// // // //             title={group.title}
// // // //             tickets={group.tickets}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default KanbanBoard;



// // // import React, { useState, useEffect } from "react";
// // // import { fetchTickets } from "../api"; // Fetch tickets and users from an API
// // // import Column from "./Column"; // A reusable column component
// // // import "../styles/kanbanBoard.css"; // Ensure proper styling

// // // const KanbanBoard = () => {
// // //   const [tickets, setTickets] = useState([]);
// // //   const [users, setUsers] = useState([]);
// // //   // const [groupBy, setGroupBy] = useState(
// // //   //   () => localStorage.getItem("groupBy") || "status"
// // //   // );
// // //   // const [sortBy, setSortBy] = useState(
// // //   //   () => localStorage.getItem("sortBy") || "priority"
// // //   // );
// // //   const [groupBy, setGroupBy] = useState(
// // //     () => localStorage.getItem("groupBy") || "status"
// // //   );
// // //   const [sortBy, setSortBy] = useState(
// // //     () => localStorage.getItem("sortBy") || "priority"
// // //   );


// // //   const priorityLabels = {
// // //     4: "Urgent",
// // //     3: "High",
// // //     2: "Medium",
// // //     1: "Low",
// // //     0: "No priority",
// // //   };

// // //   useEffect(() => {
// // //     const loadData = async () => {
// // //       try {
// // //         const data = await fetchTickets();
// // //         setTickets(data.tickets || []);
// // //         setUsers(data.users || []);
// // //       } catch (error) {
// // //         console.error("Failed to fetch tickets:", error);
// // //       }
// // //     };
// // //     loadData();
// // //   }, []);

// // //   // useEffect(() => {
// // //   //   localStorage.setItem("groupBy", groupBy);
// // //   // }, [groupBy]);

// // //   // useEffect(() => {
// // //   //   localStorage.setItem("sortBy", sortBy);
// // //   // }, [sortBy]);
// // //   useEffect(() => {
// // //     localStorage.setItem("groupBy", groupBy);
// // //   }, [groupBy]);

// // //   useEffect(() => {
// // //     localStorage.setItem("sortBy", sortBy);
// // //   }, [sortBy]);


// // //   const sortTickets = (tickets) => {
// // //     if (sortBy === "priority") {
// // //       return [...tickets].sort((a, b) => b.priority - a.priority);
// // //     }
// // //     if (sortBy === "title") {
// // //       return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
// // //     }
// // //     return tickets;
// // //   };

// // //   // const groupTickets = () => {
// // //   //   const grouped = {};
// // //   //   switch (groupBy) {
// // //   //     case "status":
// // //   //       tickets.forEach((ticket) => {
// // //   //         const status = ticket.status || "Unspecified";
// // //   //         if (!grouped[status]) grouped[status] = [];
// // //   //         grouped[status].push(ticket);
// // //   //       });
// // //   //       break;
// // //   //     case "user":
// // //   //       users.forEach((user) => {
// // //   //         grouped[user.name] = [];
// // //   //       });
// // //   //       tickets.forEach((ticket) => {
// // //   //         const user = users.find((u) => u.id === ticket.userId);
// // //   //         const key = user ? user.name : "Unassigned";
// // //   //         if (!grouped[key]) grouped[key] = [];
// // //   //         grouped[key].push(ticket);
// // //   //       });
// // //   //       break;
// // //   //     case "priority":
// // //   //       tickets.forEach((ticket) => {
// // //   //         const priority = priorityLabels[ticket.priority] || "Unspecified";
// // //   //         if (!grouped[priority]) grouped[priority] = [];
// // //   //         grouped[priority].push(ticket);
// // //   //       });
// // //   //       break;
// // //   //     default:
// // //   //       break;
// // //   //   }
// // //   //   return Object.entries(grouped).map(([key, tickets]) => ({
// // //   //     title: key,
// // //   //     tickets: sortTickets(tickets),
// // //   //   }));
// // //   // };
// // //   const groupTickets = () => {
// // //     const grouped = {};
// // //     switch (groupBy) {
// // //       case "status":
// // //         tickets.forEach((ticket) => {
// // //           const status = ticket.status || "Unspecified";
// // //           if (!grouped[status]) grouped[status] = [];
// // //           grouped[status].push(ticket);
// // //         });
// // //         break;
// // //       case "user":
// // //         tickets.forEach((ticket) => {
// // //           const user = users.find((u) => u.id === ticket.userId);
// // //           const key = user ? user.name : "Unassigned";
// // //           if (!grouped[key]) grouped[key] = [];
// // //           grouped[key].push(ticket);
// // //         });
// // //         break;
// // //       case "priority":
// // //         tickets.forEach((ticket) => {
// // //           const priority = priorityLabels[ticket.priority] || "Unspecified";
// // //           if (!grouped[priority]) grouped[priority] = [];
// // //           grouped[priority].push(ticket);
// // //         });
// // //         break;
// // //       default:
// // //         break;
// // //     }
// // //     return Object.entries(grouped).map(([key, tickets]) => ({
// // //       title: key,
// // //       tickets: sortTickets(tickets),
// // //     }));
// // //   };


// // //   const groupedTickets = groupTickets();

// // //   return (
// // //     <div className="kanban-board">
// // //       <div className="controls">
// // //         <div className="dropdown">
// // //           <label>Grouping:</label>
// // //           <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
// // //             <option value="status">Status</option>
// // //             <option value="user">User</option>
// // //             <option value="priority">Priority</option>
// // //           </select>
// // //         </div>
// // //         <div className="dropdown">
// // //           <label>Ordering:</label>
// // //           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
// // //             <option value="priority">Priority</option>
// // //             <option value="title">Title</option>
// // //           </select>
// // //         </div>
// // //       </div>

// // //       <div className="columns">
// // //         {groupedTickets.map((group) => (
// // //           <Column
// // //             key={group.title}
// // //             title={group.title}
// // //             tickets={group.tickets}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default KanbanBoard;




// // import React, { useState, useEffect } from "react";
// // import Column from "./Column";

// // const KanbanBoard = ({ tickets, users }) => {
// //   const [groupBy, setGroupBy] = useState(
// //     () => localStorage.getItem("groupBy") || "status"
// //   );
// //   const [sortBy, setSortBy] = useState(
// //     () => localStorage.getItem("sortBy") || "priority"
// //   );

// //   // Save state to localStorage
// //   useEffect(() => {
// //     localStorage.setItem("groupBy", groupBy);
// //   }, [groupBy]);

// //   useEffect(() => {
// //     localStorage.setItem("sortBy", sortBy);
// //   }, [sortBy]);

// //   // Group tickets based on the selected option
// //   const groupTickets = (tickets, groupBy, users) => {
// //     const grouped = {};

// //     tickets.forEach((ticket) => {
// //       let key;
// //       switch (groupBy) {
// //         case "status":
// //           key = ticket.status || "Unspecified";
// //           break;
// //         case "user":
// //           const user = users.find((u) => u.id === ticket.userId);
// //           key = user ? user.name : "Unassigned";
// //           break;
// //         case "priority":
// //           key =
// //             ["No priority", "Low", "Medium", "High", "Urgent"][
// //               ticket.priority
// //             ] || "Unspecified";
// //           break;
// //         default:
// //           key = "Unspecified";
// //       }

// //       if (!grouped[key]) grouped[key] = [];
// //       grouped[key].push(ticket);
// //     });

// //     return Object.entries(grouped).map(([key, tickets]) => ({
// //       title: key,
// //       tickets,
// //     }));
// //   };

// //   // Sort tickets within each group
// //   const sortTickets = (tickets, sortBy) => {
// //     return tickets.sort((a, b) => {
// //       if (sortBy === "priority") {
// //         return b.priority - a.priority; // Descending priority
// //       } else if (sortBy === "title") {
// //         return a.title.localeCompare(b.title); // Ascending title
// //       }
// //       return 0;
// //     });
// //   };

// //   // Group and sort tickets
// //   const groupedColumns = groupTickets(tickets, groupBy, users).map(
// //     (column) => ({
// //       ...column,
// //       tickets: sortTickets(column.tickets, sortBy),
// //     })
// //   );

// //   // Handle grouping and sorting changes
// //   const handleGroupByChange = (event) => {
// //     setGroupBy(event.target.value);
// //   };

// //   const handleSortByChange = (event) => {
// //     setSortBy(event.target.value);
// //   };

// //   return (
// //     <div className="kanban-board">
// //       <div className="controls">
// //         <select value={groupBy} onChange={handleGroupByChange}>
// //           <option value="status">Group by Status</option>
// //           <option value="user">Group by User</option>
// //           <option value="priority">Group by Priority</option>
// //         </select>

// //         <select value={sortBy} onChange={handleSortByChange}>
// //           <option value="priority">Sort by Priority</option>
// //           <option value="title">Sort by Title</option>
// //         </select>
// //       </div>

// //       <div className="columns">
// //         {groupedColumns.map((column) => (
// //           <Column
// //             key={column.title}
// //             title={column.title}
// //             tickets={column.tickets}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default KanbanBoard;



// import React, { useEffect, useState } from "react";
// import Column from "./Column";
// import { fetchTickets } from "../api";

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [groupBy, setGroupBy] = useState(
//     () => localStorage.getItem("groupBy") || "status"
//   );
//   const [sortBy, setSortBy] = useState(
//     () => localStorage.getItem("sortBy") || "priority"
//   );
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("groupBy", groupBy);
//   }, [groupBy]);

//   useEffect(() => {
//     localStorage.setItem("sortBy", sortBy);
//   }, [sortBy]);

//   useEffect(() => {
//     const loadTickets = async () => {
//       try {
//         setLoading(true);
//         const { tickets, users } = await fetchTickets();
//         setTickets(tickets);
//         setUsers(users);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadTickets();
//   }, []);

//   const groupTickets = (tickets, groupBy, users) => {
//     const grouped = {};

//     tickets.forEach((ticket) => {
//       let key;
//       switch (groupBy) {
//         case "status":
//           key = ticket.status || "Unspecified";
//           break;
//         case "user":
//           const user = users.find((u) => u.id === ticket.userId);
//           key = user ? user.name : "Unassigned";
//           break;
//         case "priority":
//           key =
//             ["No priority", "Low", "Medium", "High", "Urgent"][
//               ticket.priority
//             ] || "Unspecified";
//           break;
//         default:
//           key = "Unspecified";
//       }

//       if (!grouped[key]) grouped[key] = [];
//       grouped[key].push(ticket);
//     });

//     return Object.entries(grouped).map(([key, tickets]) => ({
//       title: key,
//       tickets,
//     }));
//   };

//   const sortTickets = (tickets, sortBy) => {
//     return tickets.sort((a, b) => {
//       if (sortBy === "priority") {
//         return b.priority - a.priority;
//       } else if (sortBy === "title") {
//         return a.title.localeCompare(b.title);
//       }
//       return 0;
//     });
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const groupedColumns = groupTickets(tickets, groupBy, users).map(
//     (column) => ({
//       ...column,
//       tickets: sortTickets(column.tickets, sortBy),
//     })
//   );

//   const handleGroupByChange = (event) => {
//     setGroupBy(event.target.value);
//   };

//   const handleSortByChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   return (
//     <div className="kanban-board">
//       <div className="controls">
//         <select value={groupBy} onChange={handleGroupByChange}>
//           <option value="status">Group by Status</option>
//           <option value="user">Group by User</option>
//           <option value="priority">Group by Priority</option>
//         </select>

//         <select value={sortBy} onChange={handleSortByChange}>
//           <option value="priority">Sort by Priority</option>
//           <option value="title">Sort by Title</option>
//         </select>
//       </div>

//       <div className="columns">
//         {groupedColumns.map((column) => (
//           <Column
//             key={column.title}
//             title={column.title}
//             tickets={column.tickets}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanbanBoard;




import React, { useEffect, useState } from "react";
import Column from "./Column";
import { fetchTickets } from "../api";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(
    () => localStorage.getItem("groupBy") || "status"
  );
  const [sortBy, setSortBy] = useState(
    () => localStorage.getItem("sortBy") || "priority"
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        setLoading(true);
        const { tickets, users } = await fetchTickets();
        setTickets(tickets);
        setUsers(users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTickets();
  }, []);

  const groupTickets = (tickets, groupBy, users) => {
    const grouped = {};

    tickets.forEach((ticket) => {
      let key;
      switch (groupBy) {
        case "status":
          key = ticket.status || "Unspecified";
          break;
        case "user":
          const user = users.find((u) => u.id === ticket.userId);
          key = user ? user.name : "Unassigned";
          break;
        case "priority":
          key =
            ["No priority", "Low", "Medium", "High", "Urgent"][
              ticket.priority
            ] || "Unspecified";
          break;
        default:
          key = "Unspecified";
      }

      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(ticket);
    });

    return Object.entries(grouped).map(([key, tickets]) => ({
      title: key,
      tickets,
    }));
  };

  const sortTickets = (tickets, sortBy) => {
    return tickets.sort((a, b) => {
      if (sortBy === "priority") {
        return b.priority - a.priority;
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const groupedColumns = groupTickets(tickets, groupBy, users).map(
    (column) => ({
      ...column,
      tickets: sortTickets(column.tickets, sortBy),
    })
  );

  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="kanban-board">
      <div className="controls">
        <select value={groupBy} onChange={handleGroupByChange}>
          <option value="status">Group by Status</option>
          <option value="user">Group by User</option>
          <option value="priority">Group by Priority</option>
        </select>

        <select value={sortBy} onChange={handleSortByChange}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div className="columns">
        {groupedColumns.map((column) => (
          <Column
            key={column.title}
            title={column.title}
            tickets={column.tickets}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
