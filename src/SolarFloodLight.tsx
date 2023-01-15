import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { ReactElement } from 'react'
import wattSolar from './../public/assets/products/wattSolar.jpg'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW='full' py={12} boxShadow={'2xl'}>
      <Container
        maxW={{ md: '100%', lg: '65%' }}
        p={{ md: '62' }}
        boxShadow={'2xl'}
        borderRadius='16'
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              boxSize={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={wattSolar.src}
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <Flex>
              <Text
                textTransform={'uppercase'}
                color={'green.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('green.50', 'green.900')}
                p={2}
                m={2}
                rounded={'md'}
              >
                50 Watts
              </Text>
              <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                m={2}
                rounded={'md'}
              >
                100 Watts
              </Text>
              <Text
                textTransform={'uppercase'}
                color={'orange.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('orange.50', 'orange.900')}
                p={2}
                m={2}
                rounded={'md'}
              >
                200 Watts
              </Text>
            </Flex>
            <Heading>Solar Flood Light</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              A solar flood light is a type of outdoor lighting that is powered
              by solar energy. Solar flood lights are a popular choice for
              outdoor lighting because they are energy-efficient, easy to
              install, and do not require any wiring or connection to a power
              source.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }
            >
              <Feature
                icon={
                  <Icon
                    as={IoCheckmarkDoneOutline}
                    color={'yellow.500'}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Residential'}
              />
              <Feature
                icon={
                  <Icon
                    as={IoCheckmarkDoneOutline}
                    color={'green.500'}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Small Business'}
              />
              <Feature
                icon={
                  <Icon
                    as={IoCheckmarkDoneOutline}
                    color={'purple.500'}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Commercial'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Container>
  )
}
