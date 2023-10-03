"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const pathname = usePathname();
  const [userList, setUserList] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user");
      if (response.ok) {
        const data = await response.json();
        setUserList(data.userList);
      } else {
        console.error("Error fetching user list");
      }
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  return (
    <div>
      <div>{`We are currently on the ${pathname} page`}</div>
      <button className="btn" onClick={fetchUser}>
        Get User List
      </button>
      <table>
        <thead>
          <tr>
            <th>UID</th>
            <th>Email</th>
            <th>Display Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.email}</td>
              <td>{user.displayName}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
