import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut,SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={44}
          height={44}
          alt="Convo Hub"
          className="max-sm:size-10"
        />
        <p className="pl-2 text-[26px] font-extrabold text-white max-sm:hidden">
          ConvoHub
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* clerk authentication */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
