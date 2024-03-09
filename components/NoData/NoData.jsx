import './no-data.css';
export const NoData = ({ sectionName }) => {
	return (
		<div className='no-data' data-testid='no-data'>
			<h3>No {sectionName} found...</h3>
		</div>
	);
};
