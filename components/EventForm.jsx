import Joi from "joi";
import moment from "moment";
import Form from "./common/Form";
import { saveEvent } from "../services/eventService";
import { eventLayout } from "../data/formLayouts";

const EventForm = () => {
  const initialData = {
    name: "",
    location: "",
    date: "",
    registeredCompetitors: 0,
    registrationFee: 0,
    description: "",
    giNoGiId: "",
  };

  const currentDate = () => {
    return new Date();
  };

  const schema = Joi.object({
    name: Joi.string().required().min(1).max(50).label("Name"),
    location: Joi.string().required().min(1).max(50).label("Location"),
    date: Joi.date().greater("now").required().label("Date"),
    registrationFee: Joi.number().required().label("Registration fee"),
    registeredCompetitors: Joi.number().default(0),
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
      navigateUrl="/events"
    />
  );
};

export default EventForm;
