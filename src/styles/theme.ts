import {extendTheme} from 'native-base';

export const theme = extendTheme({
  components: {
    FormControl: {
      baseStyle: {
        minHeight: {base: 60},
        marginBottom: {base: 4},
      },
    },
    Input: {
      baseStyle: {
        height: {base: 60},
      },
    },
  },
});
