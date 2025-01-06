"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../../constants";


const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger icon"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
          <SheetTitle className="hidden"></SheetTitle>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={44}
              height={44}
              alt="Convo Hub"
              className="max-sm:size-10"
            />
            <p className="pl-2 text-[26px] font-extrabold text-white ">
              ConvoHub
            </p>
          </Link>
         
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    (pathname.startsWith(link.route) && link.route !== "/");

                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          isActive && "bg-blue-1"
                        )}
                      >
                        <Image
                          src={link.imageUrl}
                          alt={link.label}
                          height={20}
                          width={20}
                        />
                        <p className="text-sm font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
