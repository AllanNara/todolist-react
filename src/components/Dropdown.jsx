import PropTypes from "prop-types";

const Dropdown = ({ name = "options", options, onSelect, defaultValue }) => {
	return (
		<select
			name={name}
			id={name}
			onChange={(e) => onSelect(e.target.value)}
			value={defaultValue}
		>
			{options.map((elem) => {
				return (
					<option value={elem.value} key={elem.id}>
						{elem.name}
					</option>
				);
			})}
		</select>
	);
};

Dropdown.propTypes = {
	name: PropTypes.string,
	onSelect: PropTypes.func,
	defaultValue: PropTypes.string,
	options: PropTypes.array.isRequired,
};

export default Dropdown;
