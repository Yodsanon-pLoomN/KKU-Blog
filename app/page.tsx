import CateTest from "@/components/CateTest";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import PostTest from "@/components/PostTest";

export default function Home() {
  const cat = {
    name: "cat",
    age: 2,
    color: "black",
  };

  return (
    <div>
      <Navbar />

      <div className="container mx-auto my-10">
        Catelog
        <div className="mt-5 grid grid-cols-5 outline outline-1 outline-solid outline-gray-300 rounded-md  gap-2">
          <CateTest />
          <CateTest />
          <CateTest />
          <CateTest />
          <CateTest />
          <CateTest />
          <CateTest />
          <CateTest />
          <CateTest />
          <CateTest />
        </div>
      </div>

      <div className="container mx-auto my-10">
      Post
      <div className="mt-5 grid grid-cols-3 outline outline-1 outline-solid outline-gray-300 rounded-md  gap-y-5">
         <PostTest />
         <PostTest />
         <PostTest />
         <PostTest />
         <PostTest />
         <PostTest />
         <PostTest />
         <PostTest />
         <PostTest />
        </div>
      </div>
    </div>
  );
}
