

export default function Message({children, avatar,username,description}){
    return (
      <div className="items-center">
        <div className="">
          <img src={avatar} />
          <h2>{username}</h2>
        </div>
        <div>
          <p>{description}</p>
        </div>
        {children}
      </div>
    );
  }