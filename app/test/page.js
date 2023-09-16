import getThisYear from "@components/utils/formateDate";
import { DB } from "@firebase2";
import { onValue, ref } from "firebase/database";

import React from "react";

export default function page() {
  const dataRef = ref(DB, "/health/rp");

  const data = onValue(dataRef, (snapshot) => {
    return snapshot.val();
  });
  console.log(data);
  return <div>hi</div>;
}
