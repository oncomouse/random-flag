import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import flags from '../flags';

const Debug = (props) => {
	const {
		update
	} = props;
	const { register, watch, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);
	const [custom, updateCustom] = useState(false);
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if (name === 'name' &&  type === 'change') {
				if (value !== 'custom') {
					update({
						name: value.name,
					})
					if (custom) {
						updateCustom(false);
						}
				} else {
					updateCustom(true);
				}
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, update, custom, updateCustom]);
	return (<form onSubmit={handleSubmit(onSubmit)}>
		<label htmlFor="name">Which Flag Template to Render:</label>
		<select id="name" {...register('name')}>
			<option value="random">Random (default behavior)</option>
			{flags.map((flag, i) => (
				<option key={i} value={flag.name}>{flag.name}</option>
			))}
			<option value="custom">Custom (define below)</option>
		</select>
		{ !custom ? null : (
			<div>
				<label htmlFor="custom-name">Template Name</label>
				<input id="custom-name" { ...register('custom.name') } />
			</div>
		) }
	</form>);
}

export default Debug;
