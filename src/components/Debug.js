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
	const [custom, updateCustom] = useState(false);
	const [type, updateType] = useState('line');
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if (name === 'name' &&  type === 'change') {
				update({
					...debug,
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
			console.log(value, name, type);
		});
		return () => subscription.unsubscribe();
	}, [watch, update, custom, updateCustom]);
	return (<div className="debug-controls">
		<form onSubmit={handleSubmit(onSubmit)}>
			<RegisterContext.Provider value={register}>
				<h1>Debug Controls</h1>
				<label className="field">
					<select id="name" {...register('name', { value: 'random', })}>
						<option value="random">Random (default behavior)</option>
						{flags.map((flag, i) => (
							<option key={i} value={flag.name}>{flag.name}</option>
						))}
						<option value="custom">Custom (define below)</option>
					</select>
					<span className="label">Which Flag Template to Render:</span>
				</label>
			</RegisterContext.Provider>
		</form>
	</div>);
}

export default Debug;
