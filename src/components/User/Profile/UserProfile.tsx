import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import WalletAdd from 'src/components/Wallet/WalletAdd';
import { IUser, useUserStore } from 'src/store/userStore';
import ProfileTabs from './ProfileTabs';
interface Props {
  user: IUser;
  loading: boolean;
}

const UserDetailsCard = ({ user, loading }: Props) => {
  // const { user } = useUser();
  return (
    <VStack
      rounded="4px"
      alignItems={'start'}
      maxW="32rem"
      w="full"
      h="full"
      bg="#0F0F0F"
      p={{ base: '1.2rem', md: '1.2rem' }}
      color="#BFBFBF"
      gap={{ base: '0.5rem', md: '1rem' }}
      border={'0.5px solid #222222'}
      overflow="hidden"
      position={'relative'}
    >
      <Center
        zIndex={'0'}
        position={'absolute'}
        transform="translate(10rem, -4rem)"
      >
        <svg
          width="534"
          height="150"
          viewBox="0 0 534 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_413_5136)">
            <path
              d="M44.2427 23.0564V13.1002L22.2343 0L0.225952 13.1002V39.8247M44.2427 23.0564L22.2343 9.95617L9.22938 17.2923M44.2427 23.0564L38.5805 26.7244M9.22938 17.2923V24.6284L15.2317 21.0007M9.22938 17.2923L15.2317 21.0007M43.7425 39.8247V29.8685L38.5805 26.7244M43.7425 39.8247L22.2343 27.2485L0.225952 39.8247M43.7425 39.8247L22.2343 53.4489L0.225952 39.8247M15.2317 21.0007L22.2343 16.7683L38.5805 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M70.6527 71.4748V61.5186L48.6444 48.4184L26.636 61.5186V88.2431M70.6527 71.4748L48.6444 58.3746L35.6394 65.7107M70.6527 71.4748L64.9906 75.1428M35.6394 65.7107V73.0468L41.6417 69.4191M35.6394 65.7107L41.6417 69.4191M70.1525 88.2431V78.2869L64.9906 75.1428M70.1525 88.2431L48.6444 75.6669L26.636 88.2431M70.1525 88.2431L48.6444 101.867L26.636 88.2431M41.6417 69.4191L48.6444 65.1867L64.9906 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M44.2427 119.893V109.937L22.2343 96.8369L0.225952 109.937V136.662M44.2427 119.893L22.2343 106.793L9.22938 114.129M44.2427 119.893L38.5805 123.561M9.22938 114.129V121.465L15.2317 117.838M9.22938 114.129L15.2317 117.838M43.7425 136.662V126.705L38.5805 123.561M43.7425 136.662L22.2343 124.085L0.225952 136.662M43.7425 136.662L22.2343 150.286L0.225952 136.662M15.2317 117.838L22.2343 113.605L38.5805 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M97.0628 23.0564V13.1002L75.0544 0L53.046 13.1002V39.8247M97.0628 23.0564L75.0544 9.95617L62.0494 17.2923M97.0628 23.0564L91.4006 26.7244M62.0494 17.2923V24.6284L68.0517 21.0007M62.0494 17.2923L68.0517 21.0007M96.5626 39.8247V29.8685L91.4006 26.7244M96.5626 39.8247L75.0544 27.2485L53.046 39.8247M96.5626 39.8247L75.0544 53.4489L53.046 39.8247M68.0517 21.0007L75.0544 16.7683L91.4006 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M123.473 71.4748V61.5186L101.464 48.4184L79.4561 61.5186V88.2431M123.473 71.4748L101.464 58.3746L88.4595 65.7107M123.473 71.4748L117.811 75.1428M88.4595 65.7107V73.0468L94.4618 69.4191M88.4595 65.7107L94.4618 69.4191M122.973 88.2431V78.2869L117.811 75.1428M122.973 88.2431L101.464 75.6669L79.4561 88.2431M122.973 88.2431L101.464 101.867L79.4561 88.2431M94.4618 69.4191L101.464 65.1867L117.811 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M97.0628 119.893V109.937L75.0544 96.8369L53.046 109.937V136.662M97.0628 119.893L75.0544 106.793L62.0494 114.129M97.0628 119.893L91.4006 123.561M62.0494 114.129V121.465L68.0517 117.838M62.0494 114.129L68.0517 117.838M96.5626 136.662V126.705L91.4006 123.561M96.5626 136.662L75.0544 124.085L53.046 136.662M96.5626 136.662L75.0544 150.286L53.046 136.662M68.0517 117.838L75.0544 113.605L91.4006 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M149.883 23.0564V13.1002L127.874 0L105.866 13.1002V39.8247M149.883 23.0564L127.874 9.95617L114.87 17.2923M149.883 23.0564L144.221 26.7244M114.87 17.2923V24.6284L120.872 21.0007M114.87 17.2923L120.872 21.0007M149.383 39.8247V29.8685L144.221 26.7244M149.383 39.8247L127.874 27.2485L105.866 39.8247M149.383 39.8247L127.874 53.4489L105.866 39.8247M120.872 21.0007L127.874 16.7683L144.221 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M176.293 71.4748V61.5186L154.284 48.4184L132.276 61.5186V88.2431M176.293 71.4748L154.284 58.3746L141.28 65.7107M176.293 71.4748L170.631 75.1428M141.28 65.7107V73.0468L147.282 69.4191M141.28 65.7107L147.282 69.4191M175.793 88.2431V78.2869L170.631 75.1428M175.793 88.2431L154.284 75.6669L132.276 88.2431M175.793 88.2431L154.284 101.867L132.276 88.2431M147.282 69.4191L154.284 65.1867L170.631 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M149.883 119.893V109.937L127.874 96.8369L105.866 109.937V136.662M149.883 119.893L127.874 106.793L114.87 114.129M149.883 119.893L144.221 123.561M114.87 114.129V121.465L120.872 117.838M114.87 114.129L120.872 117.838M149.383 136.662V126.705L144.221 123.561M149.383 136.662L127.874 124.085L105.866 136.662M149.383 136.662L127.874 150.286L105.866 136.662M120.872 117.838L127.874 113.605L144.221 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M202.703 23.0564V13.1002L180.695 0L158.686 13.1002V39.8247M202.703 23.0564L180.695 9.95617L167.69 17.2923M202.703 23.0564L197.041 26.7244M167.69 17.2923V24.6284L173.692 21.0007M167.69 17.2923L173.692 21.0007M202.203 39.8247V29.8685L197.041 26.7244M202.203 39.8247L180.695 27.2485L158.686 39.8247M202.203 39.8247L180.695 53.4489L158.686 39.8247M173.692 21.0007L180.695 16.7683L197.041 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M229.113 71.4748V61.5186L207.105 48.4184L185.096 61.5186V88.2431M229.113 71.4748L207.105 58.3746L194.1 65.7107M229.113 71.4748L223.451 75.1428M194.1 65.7107V73.0468L200.102 69.4191M194.1 65.7107L200.102 69.4191M228.613 88.2431V78.2869L223.451 75.1428M228.613 88.2431L207.105 75.6669L185.096 88.2431M228.613 88.2431L207.105 101.867L185.096 88.2431M200.102 69.4191L207.105 65.1867L223.451 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M202.703 119.893V109.937L180.695 96.8369L158.686 109.937V136.662M202.703 119.893L180.695 106.793L167.69 114.129M202.703 119.893L197.041 123.561M167.69 114.129V121.465L173.692 117.838M167.69 114.129L173.692 117.838M202.203 136.662V126.705L197.041 123.561M202.203 136.662L180.695 124.085L158.686 136.662M202.203 136.662L180.695 150.286L158.686 136.662M173.692 117.838L180.695 113.605L197.041 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M255.523 23.0564V13.1002L233.515 0L211.506 13.1002V39.8247M255.523 23.0564L233.515 9.95617L220.51 17.2923M255.523 23.0564L249.861 26.7244M220.51 17.2923V24.6284L226.512 21.0007M220.51 17.2923L226.512 21.0007M255.023 39.8247V29.8685L249.861 26.7244M255.023 39.8247L233.515 27.2485L211.506 39.8247M255.023 39.8247L233.515 53.4489L211.506 39.8247M226.512 21.0007L233.515 16.7683L249.861 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M281.933 71.4748V61.5186L259.925 48.4184L237.916 61.5186V88.2431M281.933 71.4748L259.925 58.3746L246.92 65.7107M281.933 71.4748L276.271 75.1428M246.92 65.7107V73.0468L252.922 69.4191M246.92 65.7107L252.922 69.4191M281.433 88.2431V78.2869L276.271 75.1428M281.433 88.2431L259.925 75.6669L237.916 88.2431M281.433 88.2431L259.925 101.867L237.916 88.2431M252.922 69.4191L259.925 65.1867L276.271 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M255.523 119.893V109.937L233.515 96.8369L211.506 109.937V136.662M255.523 119.893L233.515 106.793L220.51 114.129M255.523 119.893L249.861 123.561M220.51 114.129V121.465L226.512 117.838M220.51 114.129L226.512 117.838M255.023 136.662V126.705L249.861 123.561M255.023 136.662L233.515 124.085L211.506 136.662M255.023 136.662L233.515 150.286L211.506 136.662M226.512 117.838L233.515 113.605L249.861 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M308.343 23.0564V13.1002L286.335 0L264.326 13.1002V39.8247M308.343 23.0564L286.335 9.95617L273.33 17.2923M308.343 23.0564L302.681 26.7244M273.33 17.2923V24.6284L279.332 21.0007M273.33 17.2923L279.332 21.0007M307.843 39.8247V29.8685L302.681 26.7244M307.843 39.8247L286.335 27.2485L264.326 39.8247M307.843 39.8247L286.335 53.4489L264.326 39.8247M279.332 21.0007L286.335 16.7683L302.681 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M334.753 71.4748V61.5186L312.745 48.4184L290.736 61.5186V88.2431M334.753 71.4748L312.745 58.3746L299.74 65.7107M334.753 71.4748L329.091 75.1428M299.74 65.7107V73.0468L305.742 69.4191M299.74 65.7107L305.742 69.4191M334.253 88.2431V78.2869L329.091 75.1428M334.253 88.2431L312.745 75.6669L290.736 88.2431M334.253 88.2431L312.745 101.867L290.736 88.2431M305.742 69.4191L312.745 65.1867L329.091 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M308.343 119.893V109.937L286.335 96.8369L264.326 109.937V136.662M308.343 119.893L286.335 106.793L273.33 114.129M308.343 119.893L302.681 123.561M273.33 114.129V121.465L279.332 117.838M273.33 114.129L279.332 117.838M307.843 136.662V126.705L302.681 123.561M307.843 136.662L286.335 124.085L264.326 136.662M307.843 136.662L286.335 150.286L264.326 136.662M279.332 117.838L286.335 113.605L302.681 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M361.163 23.0564V13.1002L339.155 0L317.146 13.1002V39.8247M361.163 23.0564L339.155 9.95617L326.15 17.2923M361.163 23.0564L355.501 26.7244M326.15 17.2923V24.6284L332.152 21.0007M326.15 17.2923L332.152 21.0007M360.663 39.8247V29.8685L355.501 26.7244M360.663 39.8247L339.155 27.2485L317.146 39.8247M360.663 39.8247L339.155 53.4489L317.146 39.8247M332.152 21.0007L339.155 16.7683L355.501 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M387.573 71.4748V61.5186L365.565 48.4184L343.557 61.5186V88.2431M387.573 71.4748L365.565 58.3746L352.56 65.7107M387.573 71.4748L381.911 75.1428M352.56 65.7107V73.0468L358.562 69.4191M352.56 65.7107L358.562 69.4191M387.073 88.2431V78.2869L381.911 75.1428M387.073 88.2431L365.565 75.6669L343.557 88.2431M387.073 88.2431L365.565 101.867L343.557 88.2431M358.562 69.4191L365.565 65.1867L381.911 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M361.163 119.893V109.937L339.155 96.8369L317.146 109.937V136.662M361.163 119.893L339.155 106.793L326.15 114.129M361.163 119.893L355.501 123.561M326.15 114.129V121.465L332.152 117.838M326.15 114.129L332.152 117.838M360.663 136.662V126.705L355.501 123.561M360.663 136.662L339.155 124.085L317.146 136.662M360.663 136.662L339.155 150.286L317.146 136.662M332.152 117.838L339.155 113.605L355.501 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M413.983 23.0564V13.1002L391.975 0L369.967 13.1002V39.8247M413.983 23.0564L391.975 9.95617L378.97 17.2923M413.983 23.0564L408.321 26.7244M378.97 17.2923V24.6284L384.972 21.0007M378.97 17.2923L384.972 21.0007M413.483 39.8247V29.8685L408.321 26.7244M413.483 39.8247L391.975 27.2485L369.967 39.8247M413.483 39.8247L391.975 53.4489L369.967 39.8247M384.972 21.0007L391.975 16.7683L408.321 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M440.393 71.4748V61.5186L418.385 48.4184L396.377 61.5186V88.2431M440.393 71.4748L418.385 58.3746L405.38 65.7107M440.393 71.4748L434.731 75.1428M405.38 65.7107V73.0468L411.382 69.4191M405.38 65.7107L411.382 69.4191M439.893 88.2431V78.2869L434.731 75.1428M439.893 88.2431L418.385 75.6669L396.377 88.2431M439.893 88.2431L418.385 101.867L396.377 88.2431M411.382 69.4191L418.385 65.1867L434.731 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M413.983 119.893V109.937L391.975 96.8369L369.967 109.937V136.662M413.983 119.893L391.975 106.793L378.97 114.129M413.983 119.893L408.321 123.561M378.97 114.129V121.465L384.972 117.838M378.97 114.129L384.972 117.838M413.483 136.662V126.705L408.321 123.561M413.483 136.662L391.975 124.085L369.967 136.662M413.483 136.662L391.975 150.286L369.967 136.662M384.972 117.838L391.975 113.605L408.321 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M466.803 23.0564V13.1002L444.795 0L422.787 13.1002V39.8247M466.803 23.0564L444.795 9.95617L431.79 17.2923M466.803 23.0564L461.141 26.7244M431.79 17.2923V24.6284L437.792 21.0007M431.79 17.2923L437.792 21.0007M466.303 39.8247V29.8685L461.141 26.7244M466.303 39.8247L444.795 27.2485L422.787 39.8247M466.303 39.8247L444.795 53.4489L422.787 39.8247M437.792 21.0007L444.795 16.7683L461.141 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M493.213 71.4748V61.5186L471.205 48.4184L449.197 61.5186V88.2431M493.213 71.4748L471.205 58.3746L458.2 65.7107M493.213 71.4748L487.551 75.1428M458.2 65.7107V73.0468L464.202 69.4191M458.2 65.7107L464.202 69.4191M492.713 88.2431V78.2869L487.551 75.1428M492.713 88.2431L471.205 75.6669L449.197 88.2431M492.713 88.2431L471.205 101.867L449.197 88.2431M464.202 69.4191L471.205 65.1867L487.551 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M466.803 119.893V109.937L444.795 96.8369L422.787 109.937V136.662M466.803 119.893L444.795 106.793L431.79 114.129M466.803 119.893L461.141 123.561M431.79 114.129V121.465L437.792 117.838M431.79 114.129L437.792 117.838M466.303 136.662V126.705L461.141 123.561M466.303 136.662L444.795 124.085L422.787 136.662M466.303 136.662L444.795 150.286L422.787 136.662M437.792 117.838L444.795 113.605L461.141 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M519.623 23.0564V13.1002L497.615 0L475.607 13.1002V39.8247M519.623 23.0564L497.615 9.95617L484.61 17.2923M519.623 23.0564L513.961 26.7244M484.61 17.2923V24.6284L490.612 21.0007M484.61 17.2923L490.612 21.0007M519.123 39.8247V29.8685L513.961 26.7244M519.123 39.8247L497.615 27.2485L475.607 39.8247M519.123 39.8247L497.615 53.4489L475.607 39.8247M490.612 21.0007L497.615 16.7683L513.961 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M546.033 71.4748V61.5186L524.025 48.4184L502.017 61.5186V88.2431M546.033 71.4748L524.025 58.3746L511.02 65.7107M546.033 71.4748L540.371 75.1428M511.02 65.7107V73.0468L517.022 69.4191M511.02 65.7107L517.022 69.4191M545.533 88.2431V78.2869L540.371 75.1428M545.533 88.2431L524.025 75.6669L502.017 88.2431M545.533 88.2431L524.025 101.867L502.017 88.2431M517.022 69.4191L524.025 65.1867L540.371 75.1428"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M519.623 119.893V109.937L497.615 96.8369L475.607 109.937V136.662M519.623 119.893L497.615 106.793L484.61 114.129M519.623 119.893L513.961 123.561M484.61 114.129V121.465L490.612 117.838M484.61 114.129L490.612 117.838M519.123 136.662V126.705L513.961 123.561M519.123 136.662L497.615 124.085L475.607 136.662M519.123 136.662L497.615 150.286L475.607 136.662M490.612 117.838L497.615 113.605L513.961 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M572.443 23.0564V13.1002L550.435 0L528.427 13.1002V39.8247M572.443 23.0564L550.435 9.95617L537.43 17.2923M572.443 23.0564L566.781 26.7244M537.43 17.2923V24.6284L543.432 21.0007M537.43 17.2923L543.432 21.0007M571.943 39.8247V29.8685L566.781 26.7244M571.943 39.8247L550.435 27.2485L528.427 39.8247M571.943 39.8247L550.435 53.4489L528.427 39.8247M543.432 21.0007L550.435 16.7683L566.781 26.7244"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
            <path
              d="M572.443 119.893V109.937L550.435 96.8369L528.427 109.937V136.662M572.443 119.893L550.435 106.793L537.43 114.129M572.443 119.893L566.781 123.561M537.43 114.129V121.465L543.432 117.838M537.43 114.129L543.432 117.838M571.943 136.662V126.705L566.781 123.561M571.943 136.662L550.435 124.085L528.427 136.662M571.943 136.662L550.435 150.286L528.427 136.662M543.432 117.838L550.435 113.605L566.781 123.561"
              stroke="#1D1D1D"
              stroke-width="0.5"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_413_5136">
              <rect width="534" height="150" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Center>
      <HStack
        zIndex={'1'}
        align={'center'}
        justify="start"
        gap={{ base: '0.4rem', md: '1rem' }}
      >
        <Center
          rounded={'full'}
          transform={{ base: 'scale(0.9)', md: 'scale(1)' }}
        >
          {
            <SkeletonCircle
              size="12"
              isLoaded={loading}
              bg="transparent"
              startColor="#3F3F3F"
              endColor="#282828"
              fadeDuration={1}
            >
              <Avatar
                size={52}
                name={user?.pub_key as string}
                variant="pixel"
                colors={['#92A1C6', '#F0AB3D', '#C271B4', '#C20D90']}
              />
            </SkeletonCircle>
          }
        </Center>
        <VStack
          alignItems={'start'}
          gap={{ base: '', md: '0.1rem' }}
          spacing="0rem"
        >
          <HStack>
            <Skeleton
              height="20px"
              mb="0.5rem"
              w={'10rem'}
              isLoaded={loading}
              fadeDuration={4}
              bg="transparent"
              startColor="#3F3F3F"
              endColor="#282828"
            >
              <Text
                color="white"
                fontWeight="600"
                fontSize={{ base: 'md', md: 'xl' }}
              >
                {user?.userName}
              </Text>
            </Skeleton>
            {/* -- verified symbol --¯¯ */}
          </HStack>
          <Skeleton
            height="10px"
            isLoaded={loading}
            fadeDuration={4}
            bg="transparent"
            startColor="#3F3F3F"
            endColor="#282828"
          >
            <WalletAdd size="xs" copy={true} />
          </Skeleton>
        </VStack>
      </HStack>
      <SkeletonText
        mt="4"
        noOfLines={2}
        w="100%"
        spacing="2"
        skeletonHeight="2"
        isLoaded={loading}
        bg="transparent"
        startColor="#3F3F3F"
        endColor="#282828"
      >
        <Text
          //maxW="30rem"
          pb="0.5rem"
          zIndex={'1'}
          px={'0.2rem'}
          fontSize={{ base: 'xs', md: '13px' }}
        >
          {user?.bio}
        </Text>
      </SkeletonText>
    </VStack>
  );
};

const UserProjectsCard = ({ user, loading }: Props) => {
  return (
    <VStack
      rounded="4px"
      alignItems={'stretch'}
      maxW={{ base: 'full', md: '16rem' }}
      w="full"
      h="auto"
      bg="#0F0F0F"
      color="#BFBFBF"
      gap={{ base: '0.5rem', md: '1rem' }}
      border={'0.5px solid #222222'}
    >
      <VStack p="1.4rem" m="auto" align={'start'} justify="start">
        <Skeleton
          height="20px"
          mb="0.5rem"
          w={'10rem'}
          isLoaded={loading}
          fadeDuration={4}
          bg="transparent"
          startColor="#3F3F3F"
          endColor="#282828"
        >
          <Heading fontWeight="600" fontSize={{ base: 'md', md: 'xl' }}>
            Projects
          </Heading>
        </Skeleton>
        <SkeletonText
          mt="4"
          noOfLines={2}
          spacing="2"
          skeletonHeight="2"
          isLoaded={loading}
          bg="transparent"
          startColor="#3F3F3F"
          endColor="#282828"
        >
          <Text
            pb="0.8rem"
            color="#A9A9A9"
            fontSize={{ base: 'xs', md: '13px' }}
          >
            Create your first project to participate in funding rounds.
          </Text>
        </SkeletonText>
        <Skeleton
          height="20px"
          // mt="1rem"
          w={'10rem'}
          isLoaded={loading}
          fadeDuration={4}
          bg="transparent"
          startColor="#3F3F3F"
          endColor="#282828"
        >
          <Button color="#B4B4B4" bg="#262626">
            Create
          </Button>
        </Skeleton>
      </VStack>
    </VStack>
  );
};

const UserOrgCard = ({ user, loading }: Props) => {
  return (
    <VStack
      rounded="4px"
      alignItems={'stretch'}
      maxW={{ base: 'full', md: '16rem' }}
      w="full"
      h="auto"
      bg="#0F0F0F"
      color="#BFBFBF"
      gap={{ base: '0.5rem', md: '1rem' }}
      border={'0.5px solid #222222'}
    >
      <VStack p="1.4rem" m="auto" align={'start'} justify="start">
        <Skeleton
          height="20px"
          mb="0.5rem"
          w={'10rem'}
          isLoaded={loading}
          fadeDuration={4}
          bg="transparent"
          startColor="#3F3F3F"
          endColor="#282828"
        >
          <Heading fontWeight="600" fontSize={{ base: 'md', md: 'xl' }}>
            Organizations
          </Heading>
        </Skeleton>
        <SkeletonText
          mt="4"
          noOfLines={2}
          spacing="2"
          skeletonHeight="2"
          bg="transparent"
          isLoaded={loading}
          startColor="#3F3F3F"
          endColor="#282828"
        >
          <Text
            pb="0.8rem"
            color="#A9A9A9"
            fontSize={{ base: 'xs', md: '13px' }}
          >
            Create your first project to participate in funding rounds.
          </Text>
        </SkeletonText>
        <Skeleton
          height="20px"
          //mt="0.5rem"
          w={'10rem'}
          isLoaded={loading}
          fadeDuration={4}
          bg="transparent"
          startColor="#3F3F3F"
          endColor="#282828"
        >
          <Button color="#B4B4B4" bg="#262626">
            Create
          </Button>
        </Skeleton>
      </VStack>
    </VStack>
  );
};
const UserProfile = ({ loading }: any) => {
  const { user } = useUserStore();
  return (
    <Container maxW="full" p="0" my="2rem">
      {/* ---- user details card */}
      <Stack direction={{ base: 'column', md: 'row' }} gap="1rem">
        <UserDetailsCard user={user as IUser} loading={!loading} />
        <UserProjectsCard user={user as IUser} loading={!loading} />
        <UserOrgCard user={user as IUser} loading={!loading} />
      </Stack>
      <ProfileTabs />
    </Container>
  );
};

export default UserProfile;
