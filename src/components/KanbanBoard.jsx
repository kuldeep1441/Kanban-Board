


import React, { useEffect, useState } from "react";
import Column from "./Column";
import "../styles/kanbanBoard.css"; 
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
    <div className="home">
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
      <div className="kanban-board">
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
    </div>
  );
};

export default KanbanBoard;
