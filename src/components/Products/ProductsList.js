import React, { useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import { connect } from "react-redux";
import { setCategory, setTextFilter } from "../../store/actions/filters";
import selectProducts from "../../store/selectors/products";
import { ProductListItem } from "./ProductListItem";
import "./style.css";

const ProductsList = ({ products, setCategory, setTextFilter, textFilter, match: { params } }) => {
	useEffect(() => {
		const { category } = params;
		setCategory(category);
	}, [params]);

	const onChange = e => {
		const text = e.target.value;
		setTextFilter(text);
	};
	return (
		<div>
			<div className="ProductsList__filter">
				<DebounceInput
					value={textFilter}
					className="Input"
					placeholder="Filter..."
					minLength={1}
					debounceTimeout={400}
					onChange={onChange}
				/>
			</div>
			<div>
				{products.map(({ new: newItem, title }, idx) => (
					<ProductListItem key={idx} newItem={newItem} title={title} />
				))}
			</div>
		</div>
	);
};

export { ProductsList };

const mapStateToProps = (state, props) => {
	return {
		products: selectProducts(state.products, state.filters),
		textFilter: state.filters.text,
	};
};

const mapDispatchToProps = dispatch => ({
	setCategory: category => dispatch(setCategory(category)),
	setTextFilter: text => dispatch(setTextFilter(text)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList);
