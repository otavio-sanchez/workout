import React, { useState } from "react";
import { Props } from "./types";
import { Picker } from "./style";

const DatePicker = ({ onChange, placeholder, name }: Props): JSX.Element => {
  const [startDate, setStartDate]: any = useState(new Date());

  return (
    <Picker
      selected={startDate}
      onChange={(date: Date | [Date, Date]): void => {
        onChange(name, date.toString());
        setStartDate(date);
      }}
      placeholderText={placeholder || "Date"}
    />
  );
};

export default DatePicker;
