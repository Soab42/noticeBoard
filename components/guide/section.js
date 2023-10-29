import React from "react";

export default function Section({ data }) {
  return <section dangerouslySetInnerHTML={{ __html: data }} />;
}
