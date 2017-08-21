import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HTMLView from 'react-native-htmlview';
import { feedRowStyle } from './feed_row.style';

export class FeedRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.feed);
        return (
            <View style={ feedRowStyle.container }>
                <Image
                    style={ feedRowStyle.avatar }
                    source={{uri: this.props.feed.account.avatar}}
                />
                <View style={ feedRowStyle.contentView }>
                    <HTMLView
                        value={ this.props.feed.content }
                    />
                    <View style={ feedRowStyle.icons }>
                        <Icon style={ feedRowStyle.icon } name="reply" size={ 20 } />
                        <Icon style={ feedRowStyle.icon } name="retweet" size={ 20 } />
                        <Icon name="star" size={ 20 } />
                    </View>
                </View>
            </View>
        );
    }
}