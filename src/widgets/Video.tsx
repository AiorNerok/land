import Mac from "@/assets/Macbook.png";

export const Video = () => {
  return (
    <div className="min-h-screen flex items-center justify-center reactive">
      <div>
        <img srcSet={Mac} src={Mac} alt="mac" />
      </div>
    </div>
  );
};
