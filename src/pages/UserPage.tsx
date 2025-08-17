import { useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="flex h-screen  items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">
        Hello {email ? email : "Guest"}
      </h1>
    </div>
  );
};

export default UserDetails;
