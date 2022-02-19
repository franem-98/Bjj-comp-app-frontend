import { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({ name, label, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <DatePicker
        name={name}
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          onChange(moment(date).format("DD/MM/YYYY"));
        }}
      />
    </div>
  );
};

export default DateSelect;
