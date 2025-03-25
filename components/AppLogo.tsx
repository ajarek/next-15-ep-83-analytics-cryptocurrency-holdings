import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

const AppLogo=()=> {
  return (
    <div className="flex items-center justify-between  ">
      <Link href={'/'} className="flex gap-2 items-center">
        <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
          <LayoutDashboard className="text-primary-foreground" />
        </div>
        <h1 className={"text-[20px] flex gap-1 max-md:hidden"}>
          <span className="font-bold">test</span>
        </h1>
      </Link>
    </div>
  );
}
export default AppLogo