import PropTypes from 'prop-types';
import { Title, SectionStyle } from "./SectionStyle"



export const Section = ({title, children}) => {
return(
<SectionStyle>
{title && <Title>{title}</Title>}
{children}
</SectionStyle>
)

}

Section.propTypes ={
title: PropTypes.string.isRequired,
children: PropTypes.element.isRequired,
}