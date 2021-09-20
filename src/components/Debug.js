import { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import mexp from 'math-expression-evaluator';
import flags from '../flags';
import './Debug.css';

const validateStringInput = (str) => {
	if (str.match(/^-{0,1}[0-9.]+$/g)) {
		return parseFloat(str, 10);
	}
	try {
		return mexp.eval(str);	
	} catch(e) {
		return null;
	}
}

const RegisterContext = createContext(null);

const Debug = (props) => {
	const {
		update
	} = props;
	const { register, watch, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);
	const [custom, updateCustom] = useState(false);
	const [type, updateType] = useState('line');
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if (name === 'name' &&  type === 'change') {
				update({
					name: value.name,
				})
				if (value.name !== 'custom') {
					if (custom) {
						updateCustom(false);
					}
				} else {
					updateCustom(true);
				}
			}
			if (name === 'custom.type' && type === 'change') {
				updateType(value.custom.type);
			}
			console.log(value, name, type);
		});
		return () => subscription.unsubscribe();
	}, [watch, update, custom, updateCustom]);
	return (<div className="debug-controls">
		<form onSubmit={handleSubmit(onSubmit)}>
			<RegisterContext.Provider value={register}>
				<h1>Debug Controls</h1>
				<label htmlFor="name">Which Flag Template to Render:</label>
				<select id="name" {...register('name', { value: 'random', })}>
					<option value="random">Random (default behavior)</option>
					{flags.map((flag, i) => (
						<option key={i} value={flag.name}>{flag.name}</option>
					))}
					<option value="custom">Custom (define below)</option>
				</select>
				{ !custom ? null : (
					<CustomForm type={type}></CustomForm>
				) }
			</RegisterContext.Provider>
		</form>
	</div>);
}

const CustomForm = (props) => {
	const {
		type,
	} = props;
	const register = useContext(RegisterContext);
	return (
		<div>
			<label htmlFor="custom-name">Template Name:</label>
			<input id="custom-name" { ...register('custom.name') } />
			<label htmlFor="custom-type">Template Type:</label>
			<select id="custom-type" {...register('custom.type', { value: 'line' })}>
				<option value="line">Line</option>
				<option value="circle">Circle</option>
				<option value="stripes">Stripes</option>
				<option value="star">Star</option>
			</select>
			{ shapeInput(type) }
		</div>
	);
}

const shapeInput = (type) => {
	if (type === 'line') {
		return (<LineForm />);
	}
	if (type === 'circle') {
		return (<CircleForm />);
	}
	if (type === 'stripes') {
		return (<StripesForm />);
	}
	if (type === 'star') {
		return (<StarForm />);
	}
}

const LineForm = (props) => {
	const register = useContext(RegisterContext);
	return (
		<div>
		</div>
	)
}

const CircleForm = (props) => {
	const register = useContext(RegisterContext);
	return (
		<div />
	)
}

const StripesForm = (props) => {
	const register = useContext(RegisterContext);
	return (
		<div />
	)
}

const StarForm = (props) => {
	const register = useContext(RegisterContext);
	return (
		<div />
	)
}

export default Debug;
