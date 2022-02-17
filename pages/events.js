import { useState, useEffect } from "react";
import http from "../services/httpService";
import { BsImage } from "react-icons/bs";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const onMount = async () => {
      const { data: newEvents } = await http.get("/events");
      setEvents(newEvents);
    };

    onMount();
  }, []);

  return (
    <>
      <table className="table">
        <tbody>
          {events.map(
            ({
              id,
              name,
              location,
              date,
              registeredCompetitors,
              registrationFee,
            }) => (
              <tr key={id}>
                <td>
                  <BsImage />
                </td>
                <td>{name}</td>
                <td>Location: {location}</td>
                <td>Date: {date}</td>
                <td>Registered competitors: {registeredCompetitors}</td>
                <td>Registration fee: ${registrationFee}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Events;
