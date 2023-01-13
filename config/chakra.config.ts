import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Button } from 'theme/components/buttons';
import { styles } from 'theme/styles';
import { Input } from 'theme/components/input';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    cc: {
      stroke: {
        100: '#222222',
      },
      text: {
        light: '#A6A6A6',
      },
    },
  },
  config,
  styles,
  components: {
    Button,
    Input,
  },
});

export default theme;
