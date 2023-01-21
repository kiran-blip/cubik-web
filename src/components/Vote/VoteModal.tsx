import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  chakraComponents,
  OptionBase,
  Props,
  Select,
} from 'chakra-react-select';
import React from 'react';
import { useController, UseControllerProps, useForm } from 'react-hook-form';
import { tokens } from './tokens';

interface tokenGroup extends OptionBase {
  label: string;
  value: string;
  icon: any;
}
const token: tokenGroup[] = tokens;

interface FormValues {
  cohort: string;
  amount: string;
  token: string;
  donation_to_matching_pool: number;
}

const defaultValues: FormValues = {
  cohort: '', // make it to the clicked cohort the project is in
  amount: '',
  token: token[0].value,
  donation_to_matching_pool: 5,
};

type ControlledSelectProps = UseControllerProps<FormValues> &
  Props & {
    label: string;
  };

const customComponents = {
  Option: ({ children, ...props }: { children: any; props: any }) => (
    // @ts-ignore
    <chakraComponents.Option {...props}>
      {/* @ts-ignore */}
      {props?.data?.icon} {children}
    </chakraComponents.Option>
  ),
};

const ControlledSelect = ({
  control,
  name,
  rules,
  ...props
}: ControlledSelectProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController<FormValues>({
    name,
    control,
    rules,
  });

  return (
    <Select
      name={name}
      ref={ref}
      defaultValue={token[0].value}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      // @ts-ignore
      components={customComponents}
      useBasicStyles
      selectedOptionColor="#261526"
      placeholder="Token"
      colorScheme="blackAlpha"
      chakraStyles={{
        container: (provided) => ({
          ...provided,
          w: '90px !important',
          _placeholder: { fontSize: 'md' },
          fontSize: 'sm',
        }),
        valueContainer: (provided) => ({
          ...provided,
          paddingStart: '10px',
          w: '100px !important',
        }),
        input: (provided) => ({
          ...provided,
          paddingStart: '8px',
        }),
        inputContainer: (provided) => ({
          ...provided,
          paddingStart: '10px',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          p: 0,
          w: '20px !important',
        }),
        control: (provided, state) => ({
          ...provided,
          borderBottomLeftRadius: state.menuIsOpen ? 0 : 'md',
          borderBottomRightRadius: state.menuIsOpen ? 0 : 'md',
          transitionDuration: 0,
          width: '100%',
        }),
        menu: (provided) => ({
          ...provided,
          my: 0,
          backgroundColor: '#242424',
          fontSize: 'sm',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          shadow: `0 0 0 1px #242424`,
          borderWidth: '1px',
          borderColor: '#242424',
          borderBottomRadius: '4px',
        }),
        menuList: (provided, state) => ({
          //...provided,
          _selected: { backgroundColor: 'red' },
          backgroundColor: '#242424',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderWidth: 0,
        }),
      }}
      {...props}
    />
  );
};

const VoteModalBody = () => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues });
  function onSubmit(values: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box pt="1rem" pb="2rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ---- select cohort  ---- */}
        <FormControl
          pb="1rem"
          variant={'outline'}
          colorScheme={'pink'}
          isRequired
        >
          <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="cohort">
            Select Cohort
          </FormLabel>
          <Input
            background={'#1D1D1D'}
            id="cohort"
            {...register('cohort', {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>
            {errors.cohort ? <>{errors.cohort.message}</> : <></>}
          </FormErrorMessage>
        </FormControl>
        {/*---- enter amount and token --- */}
        <FormControl
          pb="1rem"
          variant={'outline'}
          colorScheme={'pink'}
          isRequired
        >
          <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="amount">
            Enter amount
          </FormLabel>
          <HStack>
            <Input
              type={'number'}
              background={'#1D1D1D'}
              id="amount"
              {...register('amount', {
                required: 'This is required',
              })}
            />{' '}
            <ControlledSelect
              control={control}
              name="token"
              id="token"
              options={token}
              label="Food Groups"
              rules={{ required: 'Please select a token' }}
            />
            {/* 
                           _selected={{
                backgroundColor: 'transparent',
                boxShadow: '0 0 0 1px transparent',
                border: '1px solid #242424',
              }}
              _hover={{
                backgroundColor: 'transparent',
                boxShadow: '0 0 0 1px transparent',
                border: '1px solid #242424',
              }}
              _active={{
                backgroundColor: 'transparent',
                boxShadow: '0 0 0 1px transparent',
                border: '1px solid #242424',
              }}
              _focus={{
                backgroundColor: 'transparent',
                boxShadow: '0 0 0 1px transparent',
                border: '1px solid #242424',
              }}
              boxShadow="0 0 0 1px transparent"
              outlineColor={'#141414'}
              backgroundColor="#141414"
              border="1px solid #242424"
              w="10rem"
                          */}
          </HStack>
          <FormErrorMessage>
            {errors.cohort ? <>{errors.cohort.message}</> : <></>}
          </FormErrorMessage>
        </FormControl>
        {/*-- select percentage donation to matching pool-- */}
        <FormControl pb="1rem">
          <FormLabel
            fontSize={{ base: 'xs', md: 'sm' }}
            htmlFor="donation_to_matching_pool"
          >
            Select Token
          </FormLabel>
          <HStack gap="0.1rem">
            {Array.from([0, 5, 10, 25, 50]).map((percentage, key) => {
              return (
                <VStack
                  cursor="pointer"
                  key={key}
                  backgroundColor="#1D1D1D"
                  _hover={{ outline: '1px solid #3E3E3E' }}
                  outline={
                    watch('donation_to_matching_pool') === percentage
                      ? '1px solid #944694'
                      : '1px solid #242424'
                  }
                  rounded="4px"
                  w="3rem"
                  h="3rem"
                  align={'center'}
                  justify="center"
                  onClick={() => {
                    setValue('donation_to_matching_pool', percentage);
                  }}
                >
                  <Text fontSize="sm" fontWeight={'500'} color="#A6A6A6">
                    {percentage}%
                  </Text>
                </VStack>
              );
            })}
          </HStack>
          <FormErrorMessage>
            {errors.donation_to_matching_pool ? (
              <>{errors.donation_to_matching_pool.message}</>
            ) : (
              <></>
            )}
          </FormErrorMessage>
        </FormControl>
        <Button
          py="1.1rem"
          fontSize={'md'}
          mt={'3rem'}
          w="full"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default VoteModalBody;
