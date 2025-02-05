import Logo from "../Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useSession, signOut } from "next-auth/react";

const navbar = () => {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result && result.error) {
        console.error(result.error);
      } else {
        router.push("/profile");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  if (status === "authenticated" && session.user) {
    return (
      <nav className="flex justify-between  p-2 outline outline-1 outline-solid outline-gray-300">
        <div className="flex items-center min-[]:">
          <Logo />
        </div>
        <div className="flex items-cente w-96">
          <Input placeholder="Search" />
        </div>
        <div className="flex items-center">
          <p>Hello!!</p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-between  p-2 outline outline-1 outline-solid outline-gray-300">
        <div className="flex items-center min-[]:">
          <Logo />
        </div>
        <div className="flex items-cente w-96">
          <Input placeholder="Search" />
        </div>
        <div className="flex items-center">
          
            <Dialog>
              <DialogTrigger className="bg-[#A73B24] text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md">Log In</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login</DialogTitle>
                  <DialogDescription>
                  By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <div className="flex  items-center justify-center">
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white p-6 rounded-md shadow-md"
                    >
                      <div className="mb-4">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full border border-gray-300 px-3 py-2 rounded" // Added border
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="w-full border border-gray-300 px-3 py-2 rounded" // Added border
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded mb-4"
                      >
                        Sign In
                      </button>{" "}
                    </form>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        
      </nav>
    );
  }
};
export default navbar;
