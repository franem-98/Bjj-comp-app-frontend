import http from "./httpService";

export function getEvents() {
  return http.get("/events");
}

export function getEvent(id) {
  return http.get(`/events/${id}`);
}

export function saveEvent(event) {
  const { id } = event;
  if (id) {
    const body = { ...event };
    delete body.id;
    return http.patch(`/events/${id}`, body);
  }
  return http.post("/events", event);
}

export function deleteEvent(id) {
  return http.delete(`/events/${id}`);
}
