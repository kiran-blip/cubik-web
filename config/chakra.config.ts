import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Avatar } from 'theme/components/avatar';
import { Button } from 'theme/components/buttons';
import { Input } from 'theme/components/input';
import { Tabs } from 'theme/components/tabs';
import { Tag } from 'theme/components/tag';
import { styles } from 'theme/styles';
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
    Avatar,
    Tag,
    Tabs,
  },
});

export default theme;
