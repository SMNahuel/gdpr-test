"use client";

import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

function DocumentSelector() {
  const [value, setValue] = useState(null);

  const handleChange = (value) => {
    console.log("value:", value);
  };

  return (
    <div className="w-72">
      <Select
        label="Select a Document"
        variant="outlined"
        value={value}
        onChange={handleChange}
      >
        <Option value="legal">Legal Notice</Option>
        <Option value="privacy">Privacy Policy</Option>
        <Option value="cookies">Cookies Policy</Option>
        <Option value="data">Data protection information for candidates</Option>
      </Select>
    </div>
  );
}

export default DocumentSelector;
