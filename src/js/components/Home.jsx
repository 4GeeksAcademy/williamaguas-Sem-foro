import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor ] = useState("green");
	return (
		<div className="text-center d-flex justify-content-center flex-column align-items-center">
			<div className="palito"></div>
            <div className="semaforo">
				<div className ={`luz bg-danger ${color==="red" ? "brillo" : ""}`} onClick={()=>{setColor("red")}}> </div>
				<div className={`luz bg-warning ${color==="yellow" ? "brillo" : ""}`} onClick={()=>{setColor("yellow")}}> </div>
				<div className={`luz bg-success ${color==="green" ? "brillo" : ""}`} onClick={()=>{setColor("green")}}> </div>

			</div>

			
		</div>
	);
};

export default Home;