import { FORM_VALIDATIONS } from '../../constants/form-validations';
import { StyledInput, StyledLabel } from './styles';

const FormInput = ({ name, text, type, placeholder, register, errors }) => {
	return (
		<>
			<StyledLabel htmlFor={name}>
				{text}
				<StyledInput
					type={type}
					id={name}
					name={name}
					placeholder={placeholder}
					{...register(name, FORM_VALIDATIONS.NAME)}
				/>
			</StyledLabel>
			<span>{errors?.[name]?.message}</span>
		</>
	);
};

export default FormInput;
