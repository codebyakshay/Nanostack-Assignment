// src/data/data.ts

export type AttendanceType = {
  mode: "auto" | "manual";
  status: "running" | "pending" | "stopped";
};

export interface UserCardData {
  id: number;
  name: string;
  profileImage: string;
  remainingMeals: number;
  badgeCount: number;
  attendance: AttendanceType;
}

export const data: UserCardData[] = [
  {
    id: 1,
    name: "Aman Sharma",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    remainingMeals: 20,
    badgeCount: 1,
    attendance: {
      mode: "auto",
      status: "running",
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
      mode: "manual",
      status: "pending",
    },
  },
  {
    id: 4,
    name: "Rohit Verma",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    remainingMeals: 18,
    badgeCount: 2,
    attendance: {
      mode: "manual",
      status: "stopped",
    },
  },
  {
    id: 5,
    name: "Neha Singh",
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    remainingMeals: 15,
    badgeCount: 0,
    attendance: {
      mode: "auto",
      status: "stopped",
    },
  },
  {
    id: 6,
    name: "Suresh Iyer",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    remainingMeals: 10,
    badgeCount: 3,
    attendance: {
      mode: "manual",
      status: "running",
    },
  },
  {
    id: 7,
    name: "Divya Kapoor",
    profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
    remainingMeals: 5,
    badgeCount: 2,
    attendance: {
      mode: "auto",
      status: "pending",
    },
  },
  {
    id: 8,
    name: "Karan Malhotra",
    profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
    remainingMeals: 0,
    badgeCount: 1,
    attendance: {
      mode: "manual",
      status: "pending",
    },
  },
  {
    id: 9,
    name: "Anjali Mehta",
    profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
    remainingMeals: 8,
    badgeCount: 4,
    attendance: {
      mode: "manual",
      status: "running",
    },
  },
];
