
import Card from './components/card/Card';
import Container from './components/container/Container';
import Form from './components/form/Form';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
			
				<Card />
				<Form />
			</Container>
		</>
	);
};

export default App;
