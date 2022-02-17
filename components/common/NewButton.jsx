import Link from "next/link";

const NewButton = ({ label, href }) => {
  return (
    <div className={`btn btn-primary`}>
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default NewButton;
