import {Flex, Text} from '@chakra-ui/react';

const history = () => {
  return (
    <Flex 
      mt={'0'} 
      bg='#1278cc'
      width='100%'
      alignItems={'center'}
      justifyContent={'center'}
      direction='column'
      height={'100vh'}
    >
       <Flex 
        direction={'column'}
        bg='white' 
        color={'black'} 
        mt={4} 
        boxShadow= '-2px 3px 13px 6px rgba(0,0,0,0.08) inset'
        borderRadius={'10'} 
        width='80%' 
        padding={'2'}
        >
          <Text textTransform={'capitalize'} fontSize='small' textAlign={'center'} fontWeight='black'>
            future transactions will be displayed here.
          </Text>
        </Flex>

    </Flex>
  )
}

export default history