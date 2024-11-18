// // src/api.js
// import axios from "axios";

// export const fetchTickets = async () => {
//   const response = await axios.get(
//     "https://api.quicksell.co/v1/internal/frontend-assignment"
//   );
//   return response.data;
// };


export const fetchTickets = async () => {
  const response = await fetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
};
