import { useRouter } from "next/router";
import EventForm from "../../components/EventForm";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id === "new") return <EventForm />;
  return "Alt";
};

export default Event;
