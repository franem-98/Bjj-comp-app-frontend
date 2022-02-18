export function eventLayout() {
  return [
    ["input", "name", "Name", "text"],
    ["input", "location", "Location", "text"],
    ["input", "date", "Date", "text"],
    ["input", "registrationFee", "Registration fee", "number"],
    ["input", "description", "Description", "text"],
    [
      "select",
      "giNoGiId",
      "Gi/NoGi",
      [
        { id: 1, name: "Gi" },
        { id: 2, name: "NoGi" },
        { id: 3, name: "Gi & NoGi" },
      ],
    ],
  ];
}
export function competitorLayout() {
  return [];
}
export function academyLayout() {
  return [];
}
