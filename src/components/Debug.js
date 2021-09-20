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
		debug,
		update
	} = props;
	const { register, watch, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);
	const templateName = watch('name', 'random');
	const customType = watch('custom.type', 'line');
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if (name === 'name' &&  type === 'change') {
				update({
					...debug,
					name: value.name,
				})
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, update]);
	return <div className="debug-controls">
		<form onSubmit={handleSubmit(onSubmit)}>
			<RegisterContext.Provider value={register}>
				<h1>Debug Controls</h1>
				<label className="field">
					<select id="name" {...register('name', { defaultValue: 'random' })}>
						<option value="random">Random (default behavior)</option>
						{flags.map((flag, i) => (
							<option key={i} value={flag.name}>{flag.name}</option>
						))}
						<option value="custom">Custom (define below)</option>
					</select>
					<span className="label">Which Flag Template to Render:</span>
				</label>
				{ templateName === 'custom' ? <CustomShapeForm type={customType} /> : null }
			</RegisterContext.Provider>
		</form>
	</div>;
}

const CustomShapeForm = (props) => {
	const {
		types,
	} = props;

	const register = useContext(RegisterContext);

	return (
		<div>
			<label className="field">
				<input {...register('custom.name')} />
				<span className="label">Template Name:</span>
			</label>
			<label className="field">
				<input type="number" min="0" {...register('custom.colors', { min: 0 })}/>
				<span className="label">Number of Colors:</span>
			</label>
			<section className="grid">
				<div>
					<label className="field">
						<select {...register('custom.type')}>
							<option value="line">Line</option>
							<option value="star">Star</option>
							<option value="stripes">Stripes</option>
							<option value="circle">Circle</option>
						</select>
						<span className="label">Type of Shape</span>
					</label>

					<button className="button -center">Add Another Shape</button>
				</div>
				<div>
					<select multiple style={{ width: '100%' }}>
					</select>
					<section className="grid">
						<div><button className="button">Move Up</button></div>
						<div><button className="button">Move Down</button></div>
					</section>
					</div>
			</section>
		</div>
	)
}

export default Debug;
