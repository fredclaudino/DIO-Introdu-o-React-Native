import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Pressable,
    Linking} from 'react-native';

const colorGitHub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/105223003?v=4';
const urlGitHub = 'https://github.com/fredclaudino';
const App = () => {
    const handlePressGoToGitHub = async()=>{
        console.log('testando');
        const res = await Linking.canOpenURL(urlGitHub);
        if (res) {
            console.log('abrindo');
            await Linking.canOpenURL(urlGitHub);
            console.log('ok');
        }
    };
    return (
        <SafeAreaView style={style.containter}>
            <StatusBar backgroundColor={colorGitHub} barStyle={'light-content'} />
                <View style={style.content}>
                    <Image accessibilityLabel='Fotografia de Perfil Frederico Claudino' 
                    style={style.avatar} 
                    source={{uri: imageProfileGitHub}}/>
                    <Text accessibilityLabel='Nome: Frederico Claudino'
                    style={[style.defaultText, style.name]}>
                    Frederico Claudino</Text>
                    <Text accessibilityLabel='Nickname: Fred Claudino'
                    style={[style.defaultText, style.nickName]}>
                    fredclaudino</Text>
                    <Text accessibilityLabel='Descrição: Bacharel em Sistemas de Informações, Desenvolvedor JavaScript'
                    style={[style.defaultText, style.description]}>
                    Bacharel em Sistemas de Informações | Desenvolvedor JavaScript!</Text>
                    <Pressable onPress={handlePressGoToGitHub}>
                        <View style={style.button}>
                        <Text style={[style.defaultText, style.description]}>Abra no Github</Text>
                        </View>
                    </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    containter: {
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: 'white',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickName: {
        fontSize: 18,
        color: 'gray',
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
       backgroundColor: 'gray',
       borderRadius: 10,
       padding: 20,
    },
});