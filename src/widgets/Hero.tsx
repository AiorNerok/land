import Logo from "@/assets/logo.png";
import { Container } from "@/components/common";
import Tg from "@/assets/tg.png";
import In from "@/assets/in.png";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Link } from "@radix-ui/themes";

export const Hero = () => {
  const menuItem: { id: number; title: string; href: string }[] = [
    {
      id: 1,
      title: "Content",
      href: "#Content",
    },
    {
      id: 2,
      title: "Market",
      href: "#Market",
    },
    {
      id: 3,
      title: "Finance",
      href: "#Finance",
    },
    {
      id: 4,
      title: "About us",
      href: "#About_us",
    },
  ];

  return (
    <div className="bg-purple">
      <Container>
        <div className="absolute top-6 inset-x-0 px-3">
          <div className="flex justify-between items-center ">
            <div>
              <img src={Logo} alt="logo" srcSet={Logo} />
            </div>
            <div>
              <ul className="flex flex-row flex-nowrap space-x-10 ">
                {menuItem.map((el) => (
                  <li key={el.id} className="font-work no-underline">
                    <Link
                      style={{ textDecoration: "none", color: "#000" }}
                      href={el.href}
                    >
                      {el.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center flex-col ">
            <div className="mb-14 space-y-5">
              <h1 className="font-work font-black text-8xl w-full">
                Find your ideal job in IT
              </h1>
              <p className="max-w-xl mx-auto text-center text-3xl">
                Ai job search in IT
                <br /> All vacancies in IT are available in one place Get 100%
                relevant talents here
              </p>
            </div>
            <button className="max-w-xl w-full bg-light-green shadow-button rounded-md font-bold text-xl py-3 leading-5">
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                href="https://t.me/mudaist"
              >
                Сonnect with us
              </Link>
            </button>
          </div>
        </div>

        <div>
          <AspectRatio ratio={1}>
            <img
              className="h-full w-full object-cover"
              src={Tg}
              alt="telegram"
            />
          </AspectRatio>
        </div>
        <div>
          <AspectRatio ratio={1}>
            <img
              className="h-full w-full object-cover"
              src={In}
              alt="telegram"
            />
          </AspectRatio>
        </div>
      </Container>
    </div>
  );
};
