import { useRouter } from "next/router";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id === "new") return <h1>Event form</h1>;
};

export default Event;
