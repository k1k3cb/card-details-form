import { StyledAside, StyledBackCard, StyledBackCardSpan, StyledFrontCard, StyledFrontCardDiv, StyledFrontCardImg, StyledFrontCardNumber } from './styles';

const Card = () => {
	return (
		<StyledAside>
			<StyledBackCard>
				<StyledBackCardSpan>000</StyledBackCardSpan>
			</StyledBackCard>
			<StyledFrontCard>
				<StyledFrontCardImg src="assets/images/card-logo.svg" alt="" />
				<StyledFrontCardNumber>0000 0000 0000 0000</StyledFrontCardNumber>
				<StyledFrontCardDiv>
					<span>Jane Appleseed</span>
					<span>00/00</span>
				</StyledFrontCardDiv>
			</StyledFrontCard>
		</StyledAside>
	);
};

export default Card;
