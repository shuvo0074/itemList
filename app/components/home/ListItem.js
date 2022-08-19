import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import GlobalStyles from '../../style';

export default function ListItem({item, index}) {
  const [isSelected, setIsSelected] = useState(false);

  const {producList} = useSelector(state => state.app);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsSelected(s => !s);
      }}
      style={styles.itemContainer(isSelected)}>
      <View style={styles.detailsCard}>
        <Text numberOfLines={3} style={styles.titletxt}>
          {item}
        </Text>
        {producList
          .filter(product => product.category == index)
          .map(item => (
            <View style={styles.product}>
              <View style={styles.productHeader}>
                <Text style={styles.itemName}>{item.title}</Text>
                {item.quantity ? (
                  <Text style={styles.itemName}>{item.quantity}</Text>
                ) : null}
              </View>
              <Text style={styles.descTxt}>{item.description}</Text>
            </View>
          ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: isSelected => ({
    backgroundColor: isSelected ? '#1c243d' : 'transparent',
    width: GlobalStyles.DEVICE_WIDTH,
    borderBottomWidth: 1,
    borderBottomColor: '#373d53',
    padding: GlobalStyles.PADDING,
    flexDirection: 'row',
  }),
  product: {
    marginVertical: GlobalStyles.PADDING / 5,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titletxt: {
    fontSize: 16,
    fontWeight: GlobalStyles.fw800,
    color: GlobalStyles.COLOR_LIGHTEST,
    marginLeft: GlobalStyles.PADDING / 3,
  },
  itemName: {
    fontSize: GlobalStyles.fs14,
    fontWeight: GlobalStyles.fw500,
    color: GlobalStyles.COLOR_LIGHTER,
    marginLeft: GlobalStyles.PADDING / 3,
  },
  descTxt: {
    fontSize: GlobalStyles.fs12,
    fontWeight: GlobalStyles.fw300,
    color: GlobalStyles.COLOR_GREY,
    marginLeft: GlobalStyles.PADDING / 3,
  },
  detailsCard: {
    width: GlobalStyles.DEVICE_WIDTH - 2 * GlobalStyles.PADDING,
  },
});
