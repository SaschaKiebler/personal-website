

export default function Message({children, avatar,username,description}){
    return (
      <div className="bg-slate-800 rounded-xl p-3 mt-5">
        <div className="">
          <h5 className="flex items-center"><img src={avatar} className="w-9 rounded-full mr-2"/>{username}</h5>
        </div>
        <div className="bg-slate-500 m-3 rounded-md text-left p-1">
          <p className="whitespace-normal">{description}</p>
        </div>
        {children}
      </div>
    );
  }