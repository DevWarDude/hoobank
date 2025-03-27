import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BounceLoader color="#0ea6eb" />;
    </div>
  );
};

export default Loading;
