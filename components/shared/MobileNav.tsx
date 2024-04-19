import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import NavItems from "./NavItems";

import MenuIcon from '../../public/assets/icons/menu.svg';
import Logo from '../../public/assets/images/logo.svg';

const MobileNav = () => (
  <nav className="md:hidden">
    <Sheet>
      <SheetTrigger className="align-middle">
        <Image 
          src={MenuIcon}
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
        <Image 
          src={Logo}
          alt="logo"
          width={128}
          height={38}
        />
        <Separator className="border border-gray-50" />
        <NavItems />
      </SheetContent>
    </Sheet>
  </nav>
);

export default MobileNav;