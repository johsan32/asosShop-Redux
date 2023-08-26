import load from "../assets/loading2.gif";

const Loading = () => {
  return (
    <div className="container" >
         <div className="d-flex flex-column align-items-center justify-content-center mt-3" style={{width:"100%", height:"100vh"}}>
      <img src={load} alt="" className="w-100 h-100" />
    </div>
    </div>
 
  );
};

export default Loading;
