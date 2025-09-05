"use client"
import React from "react";

function Input({ input, onChange, className }) {
  return (
      <input className={className} onChange={onChange} {...input} />
  );
}

export default Input;
