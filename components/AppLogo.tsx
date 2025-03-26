import {Coins } from "lucide-react";
import Link from "next/link";
import { Label } from "./ui/label";

const AppLogo=()=> {
  return (
    <div className="flex items-center justify-between  ">
      <Link href={'/'} className="w-full flex items-center gap-8">
        <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
        <Coins size={48} className="text-primary-foreground" />
        </div>
        <Label className='text-2xl max-sm:hidden'>KryptoAktywa</Label>
      </Link>
    </div>
  );
}
export default AppLogo