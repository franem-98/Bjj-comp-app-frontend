import { useState, useEffect } from "react";
import NewButton from "../../components/common/NewButton";
import DeleteButton from "../../components/common/DeleteButton";
import { deleteEvent, getEvents } from "../../services/eventService";
import { BsImage } from "react-icons/bs";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const onMount = async () => {
      const { data: newEvents } = await getEvents();
      setEvents(newEvents);
    };

    onMount();
  }, []);

  const handleDelete = async (id) => {
    const oldEvents = events;
    const newEvents = oldEvents.filter((event) => event.id !== id);
    setEvents(newEvents);
    try {
      await deleteEvent(id);
    } catch (err) {
      if (err.response && err.response.status === 404) setEvents(oldEvents);
    }
  };

  return (
    <div>
      <NewButton label="New event" href="/events/new" />
      <table className={`table `}>
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
                <td>
                  <DeleteButton onDelete={() => handleDelete(id)} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Events;
