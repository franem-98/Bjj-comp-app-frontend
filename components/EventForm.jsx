import Joi from "joi";
import Form from "./common/Form";
import { saveEvent } from "../services/eventService";
import { eventLayout } from "../data/formLayouts";

const EventForm = () => {
  const initialData = {
    name: "",
    location: "",
    date: "",
    registrationFee: 0,
    description: "",
    giNoGiId: "",
  };

  const schema = Joi.object({
    name: Joi.string().required().min(1).max(50).label("Name"),
    location: Joi.string().required().min(1).max(50).label("Location"),
    date: Joi.string().required().min(1).max(50).label("Date"),
    registrationFee: Joi.number().required().label("Registration fee"),
    description: Joi.string().required().min(1).max(1000).label("Description"),
    giNoGiId: Joi.string().required().label("Gi/NoGi"),
  });

  return (
    <Form
      formName="Event"
      initialData={initialData}
      formLayout={eventLayout()}
      buttonLabel="Save"
      schema={schema}
      submitAction={saveEvent}
    />
  );
};

export default EventForm;
