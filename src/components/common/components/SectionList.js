
// takes in 2 attributes
// 1) title
// 2) array of strings
import React,{Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SectionList extends Component {

    renderList = (element) => {
        return (
            <Text style={{paddingLeft:15, paddingVertical: 8, borderWidth:.4, borderColor:'grey'}} > {element.item} </Text>
        )
    }

    determineHeight = () => {
        if (this.props.height === undefined || this.props.height === null){
            return 172;
        }
        return this.props.height;
    }

    render(){
        const {title, list, bannerColor, titleColor, height} = this.props;
        return (
            <View style={{borderTopLeftRadius:20, borderTopRightRadius:20, overflow:'hidden', marginHorizontal:10, marginBottom:10, height:this.determineHeight() }} >
                <Text style={{fontSize: 16, textAlign:'center', backgroundColor: bannerColor, color: titleColor, paddingLeft:15, paddingVertical: 8, borderWidth:.4, borderColor:'grey'}}> {title} </Text>
                <FlatList
                    data = {list}
                    renderItem = { this.renderList }
                    keyExtractor = {(text) => text}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    }
})


export {SectionList};