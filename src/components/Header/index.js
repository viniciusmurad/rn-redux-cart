import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Wrapper, Logo, Cart, ItemCount } from './styles';

export default function Header({ navigation }) {
    return (
        <Wrapper>
            <Container>
                <Logo />
                <Cart>
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                    <ItemCount>3</ItemCount>
                </Cart>
            </Container>
        </Wrapper>
    );
}
