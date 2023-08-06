// components/ButtonWithEventHandler.tsx
import React from "react";

export default function ButtonWithEventHandler({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
