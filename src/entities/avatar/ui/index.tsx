import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

export const AvatarEntities = () => {
  const d = ["Vacancy", "Resume", "Search results", "Change password"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none flex items-center gap-3">
        <p>Vasja Shvarc</p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>example@email.com</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {d.map((i) => (
          <DropdownMenuItem key={i}>{i}</DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="font-bold">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
