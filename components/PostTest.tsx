import Logo from "./Logo"

const PostTest = () => {
  return (
    <div className="p-5 bg-transparent max-h-fit max-w-fit justify-self-center hover:bg-black/10  "> 
    <a href="">
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap p-20 outline outline-1 outline-solid outline-gray-300">
        <Logo /> 
        </div>
    <h1 className="mt-2">Head</h1>
    <p>description</p>
    </div>
    </a>
    </div>
  )
}
export default PostTest