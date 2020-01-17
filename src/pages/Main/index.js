import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import {
    Container,
    Product,
    ProducTitle,
    ProductPrice,
    AddButton,
    ProductAmount,
    ProductAmountText,
    ProductImage,
    AddButtonText,
} from './styles';

export default class Main extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('products');
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    }

    renderProduct = ({ item }) => {
        return (
            <Product key={item.id}>
                <ProductImage source={{ uri: item.image }} />
                <ProducTitle>{item.title}</ProducTitle>
                <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <ProductAmountText>
                            9{/* {amount[item.id] || 0} */}
                        </ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
        );
    };

    render() {
        const { products } = this.state;
        return (
            <Container>
                <FlatList
                    horinzontal
                    data={products}
                    keyExtractor={item => String(item.id)}
                    renderItem={this.renderProduct}
                />
            </Container>
        );
    }
}

// Main.navigationOptions = {
//     title: 'Hello world',
// };
