import PropTypes from 'prop-types';
import { Item, Parag, Button } from './ContactItemStyled';

export const ContactItem = ({ name, number, onClick, id }) => {
    return (
        <Item>
            <Parag>
                {name} : {number}
            </Parag>
            <Button onClick={() => onClick(id)}>Delete</Button>
        </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};