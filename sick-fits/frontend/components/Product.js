import PropTypes from 'prop-types';
import Link from 'next/link';

import formatMoney from '../lib/formatMoney';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';

export default function Product({ product }) {
  const { id, name, description, price, photo } = product;
  return (
    <ItemStyles>
      <img src={photo?.image?.publicUrlTransformed} alt={name} />
      <Title>
        <Link href={`/product/${product.id}`}>{name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{description}</p>
    </ItemStyles>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
