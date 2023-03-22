import React from "react";
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors
} from '.././styles/appStyles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const Header = ({handleClearTodos}) => {
    return (
        <HeaderView>
            <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
                <HeaderTitle>Dear Diary</HeaderTitle>
            </TouchableOpacity>
            
            <HeaderButton
                onPress={handleClearTodos} >
                    <MaterialCommunityIcons name="playlist-remove" size={35} color={colors.tertiary} />
            </HeaderButton>
        </HeaderView>
    );
}

export default Header;