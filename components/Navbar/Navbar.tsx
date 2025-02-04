import Logo from "../Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navbar = () => {
  return (
    <nav className="flex justify-between  p-2 outline outline-1 outline-solid outline-gray-300">
      <div className="flex items-center min-[]:">
        <Logo />
      </div>
      <div className="flex items-cente w-96">
        <Input  placeholder="Search" />
      </div>
      <div className="flex items-center">
        <div className="bg-[#A73B24] text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md">
          <Dialog >
            <DialogTrigger>Log In</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Log In</DialogTitle>
                <DialogDescription>
                By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
                </DialogDescription>
                <DialogDescription > <Button>Log In</Button> </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          </div>
      </div>
    </nav>
  );
};
export default navbar;
