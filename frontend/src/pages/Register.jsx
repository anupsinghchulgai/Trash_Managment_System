const Register=()=>{
  return(
    <div className="mx-2 my-2 bg-origin-padding">
        <h1 className=" h-20 w-full text-5xl flex justify-center font-light bg-fuchsia-100">Sign up in your account</h1>

        <div className="flex space-x-1">

        
      <div className=" mt-10 flex flex-col space-y-5 px-10 ">
       
        <input 
        className="h-20 w-80 border  border-black"
        type="text"
        placeholder="Enter you first name"
        ></input>
        <input 
        className="h-20 w-80 border  border-black"
        type="text"
        placeholder="Enter your Last Name"
        ></input>
        <input 
        className="h-20 w-80 border  border-black"
        type="email"
        placeholder="Enter your Email"
        ></input>
         <input 
        className="h-20 w-80 border  border-black"
        type="password"
        placeholder="Enter your Password"
        ></input>
         <input 
        className="h-20 w-80 border  border-black"
        type="password"
        placeholder="Confirm Your Password"
        ></input>




      </div>
      <img
      className="h-full w-full mt-10 rounded-2xl shadow-green-100 border-amber-50"
      src="https://i.pinimg.com/736x/23/09/c7/2309c781cb7c029680550908ae3fd6e8.jpg"
      alt="register image"></img>
      
      </div>

      <div>
        <button className=" mt-50 h-25 w-50 rounded-full bg-blue-300 flex justify-center items-center text-center text-4xl mx-auto">Register</button>
      </div>

    </div>
  )
     
  

}
export default Register;