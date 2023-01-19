import { ComponentStyleConfig } from '@chakra-ui/react';

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      background: '#141414',
      boxShadow: 'none',
      _focus: {
        background: '#141414',
        boxShadow: '0 0 0 1px #F290F2',
      },
      _hover: {
        background: '#141414',
        boxShadow: '0 0 0 1px #F290F2',
      },
    },
  },
  sizes: {
    md: {
      field: {
        backgroundColor: '#141414',
        rounded: '4px',
        border: 'none',
        fontSize: '12px',
        _focus: {
          backgroundColor: '#141414',
          boxShadow: '0 0 0 1px #F290F2',
          borderColor: '#F290F2',
        },
        _hover: {
          backgroundColor: '#141414',
          boxShadow: '0 0 0 1px #F290F2',
          borderColor: '#F290F2',
        },
        _active: {
          border: '1px solid #F290F2',
          boxShadow: '0 0 0 1px #F290F2',
        },
        _required: {
          color: '#F290F2',
        },
      },
    },
  },
  variants: {
    outline: {
      field: {
        background: '#141414',
        outline: '1px solid #242424',
        boxShadow: 'none',
        fontSize: '12px',
        borderColor: 'transparent',
        _focus: {
          borderColor: '#F290F2',
          boxShadow: '0 0 0 1px #F290F2',
          outlineColor: '#F290F2',
        },
        _hover: {
          borderColor: '#F290F2',
          boxShadow: '0 0 0 1px #F290F2',
          outlineColor: '#F290F2',
        },
        _active: {
          borderColor: '#F290F2',
          boxShadow: '0 0 0 1px #F290F2',
          outlineColor: '#F290F2',
        },
        _required: {
          color: '#F290F2',
        },
      },
    },
    filled: {
      field: {
        background: '#141414',
        outline: '1px solid #242424',
        borderColor: '#242424',
        _focus: {
          background: '#141414',
          boxShadow: '0 0 0 1px #F290F2',
        },
        _hover: {
          background: '#141414',
          boxShadow: '0 0 0 1px #F290F2',
        },
      },
    },
    flushed: {
      field: {
        background: '#141414',
        outline: '1px solid #242424',
        borderColor: '#242424',
        borderRadius: 0,
        paddingX: 0,
        _focus: {
          background: '#141414',
          boxShadow: '0 0 0 1px #F290F2',
        },
        _hover: {
          background: '#141414',
          boxShadow: '0 0 0 1px #F290F2',
        },
      },
    },
    unstyled: {
      field: {
        background: '#141414',
        borderRadius: 'md',
        height: 'auto',
        paddingX: 0,
        _focus: {
          background: '#141414',
          boxShadow: '0 0 0 1px #F290F2',
        },
        _hover: {
          background: '#141414',
          boxShadow: '0 0 0 1px #F290F2',
        },
      },
    },
  },
  defaultProps: {
    /**
     * Set either or both of these to null to use only what's in { baseStyle }
     */
    size: 'md',
    variant: 'outline',
  },
};
