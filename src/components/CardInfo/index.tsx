import {Image, StyleSheet, Text, View} from 'react-native';

export default function CardInfo(props: any) {
  return (
    <View style={style.container}>
      <Image source={props.icon} />
      <Text style={style.text_title}>{props.title}</Text>
      <Text style={style.response}>{props.resp}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff66',
    flexDirection: 'column',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  text_title: {
    letterSpacing: 0.38,
    color: 'rgba(235, 235, 245, 0.6)',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 18,
  },
  response: {
    letterSpacing: 0.38,
    color: 'white',
    fontWeight: '800',
    fontSize: 12,
  },
});
