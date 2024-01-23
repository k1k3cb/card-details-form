import { useForm } from 'react-hook-form';
import {
	StyledButton,
	StyledFlexDiv,
	StyledFormExpDateLeft,
	StyledFormExpDateRight,
	StyledFrom
} from './styles';
import FormInput from '../form-input/FormInput';

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	console.log(errors);

	return (
		<StyledFrom onSubmit={handleSubmit(formSubmit)}>
			<FormInput
				registerName='NAME'
				name='cardHolderName'
				text='Cardholder Name'
				type='text'
				placeholder='e.g. Jane Appleseed'
				register={register}
				errors={errors}
			/>

			<FormInput
				registerName='CARD_NUMBER'
				name='cardNumber'
				text='Card Number'
				type='text'
				placeholder='e.g. 1234 5678 9123 0000'
				register={register}
				errors={errors}
			/>
			<StyledFlexDiv>
				<StyledFormExpDateLeft>
					<FormInput
						registerName='CARD_NUMBER'
						name='expDate'
						text='EXP. DATE'
						type='number'
						placeholder='MM'
						register={register}
						errors={errors}
					/>
					<FormInput
						registerName='CARD_NUMBER'
						name='mmYY'
						text='(MM/YY)'
						type='number'
						placeholder='YY'
						register={register}
						errors={errors}
					/>
				</StyledFormExpDateLeft>
				<StyledFormExpDateRight>
					<FormInput
						registerName='CARD_NUMBER'
						name='cvc'
						text='CVC'
						type='number'
						placeholder='e.g. 123'
						register={register}
						errors={errors}
					/>
				</StyledFormExpDateRight>
			</StyledFlexDiv>

			<StyledButton type='submit'>Confirm</StyledButton>
		</StyledFrom>
	);
};

const formSubmit = data => {
	console.log(data);
};

export default Form;
