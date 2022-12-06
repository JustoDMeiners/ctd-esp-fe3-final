import React, { useEffect, useState } from "react";


const Form = () => {
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	function isValidEmail(email) {
		return /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
	}


	
	const [submitted, setSubmitted] = useState(false);
	const [errorName, setErrorName] = useState(true);
	const [error, setError] = useState(true);
	const [errorEmail, setErrorEmail] = useState(true);
	

	
	const handleName = (e) => {
		setName(e.target.value);
		setErrorName(e.target.value.length <= 5)
		setError(errorName||errorEmail)
		console.log("name:" + error);
		setSubmitted(false);
	};

	
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setErrorEmail(!isValidEmail(e.target.value))
		setError(errorName || errorEmail);
		console.log("mail:"+error);
		setSubmitted(false);
	};


	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (error) {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
				 visibility:submitted ? 'visible' : 'hidden',
				}}
			>
				<h1>Gracias {name} recibimos tu contacto!!</h1>
			</div>
		);
	};

	
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					visibility: error ? "visible" : "hidden",
				}}
			>
				<h2
					style=
					{{
						color: error ? "red" : "black",
					}}>
					Recuerde un e-mail valido y un nombre mayor o igual a 5 letras
				</h2>
			</div>
		);
	};

	return (
		<div className="form">
			<div>
				<h1>Contacto</h1>
			</div>

			
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form>
				
				<label className="label">Nombre</label>
				<input
					onChange={handleName}
					className="input"
					value={name}
					type="text"
				/>

				<label className="label">Email</label>
				<input
					onChange={handleEmail}
					className="input"
					value={email}
					type="email"
				/>


				<button onClick={handleSubmit} className="btn" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
export default Form;
