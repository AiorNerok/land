import Mac from "@/assets/Macbook.png";

export const Video = () => {
  return (
    <div className="min-h-screen flex items-center justify-center reactive">
      <div>
        <img srcSet={Mac} src={Mac} alt="mac"/>
      </div>
        <div className="absolute inset-0  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-white to-white"></div>
    </div>
  );
};
