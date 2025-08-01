// src/data/data.ts

export const data = [
  {
    id: 1,
    name: "Aman Sharma",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    remainingMeals: 20,
    badgeCount: 1,
    attendance: {
      mode: "auto", // →This will show play/pause button
      status: "running", // →This will show Stop button with active state
    },
  },
  {
    id: 2,
    name: "Aman Sharma",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    remainingMeals: 20,
    badgeCount: 1,
    attendance: {
      mode: "auto",
      status: "running",
    },
  },
  {
    id: 3,
    name: "Aman Sharma",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    remainingMeals: 20,
    badgeCount: 1,
    attendance: {
      mode: "manual", // →This will show checkboxes and Start button
      status: "pending", // →This manual state, no ongoing session
    },
  },
];
