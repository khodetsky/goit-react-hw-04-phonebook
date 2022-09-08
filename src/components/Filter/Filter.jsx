import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onFilterContact }) => {
    return (
        <div>
            <FilterLabel htmlFor='filter'>
                Find contacts by name
            </FilterLabel>
            <FilterInput id="filter" type="text" onChange={onFilterContact}/>
        </div>
    )
}

Filter.propTypes = {
    onFilterContact: PropTypes.func.isRequired,
}