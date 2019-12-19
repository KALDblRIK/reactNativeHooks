import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.smallMargin,
    flex: 1,
  },
  icon: {
    marginRight: Metrics.baseMargin,
    width: Metrics.icons.medium,
    textAlign: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
  },
  accordion: {
    borderWidth: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Metrics.baseMargin,
  }
})
