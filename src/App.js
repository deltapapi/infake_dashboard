import './App.css';
import { useState, useEffect } from 'react';
import { Flex, Box, Image, Heading, Text, Avatar, Divider, Button, Stack, Tag, TagLeftIcon } from '@chakra-ui/react';
import { HiAnnotation, HiInformationCircle, HiPlusCircle, HiPlusSm } from "react-icons/hi";
import { SideMenu } from './elements/SideMenu';
import { ChatInstances } from './elements/ChatInstance';
import { TeamWid } from './elements/TeamWid'

const App = () => {
  // Function to generate random CEO names and profile pictures
  const generateCEO = () => {
    const ceos = [
      { name: 'Stuart Wilson', profile_picture: 'https://xsgames.co/randomusers/avatar.php?g=male', company: 'Paraform', email: 'stuart.will@paraform.net', city: 'Dallas', state: 'Texas' },
      { name: 'Michael Williams', profile_picture: '', company: 'Vulfpeck Enterprises', email: 'mike.willms@vulfpeck.com', city: 'Seattle', state: 'Washington DC' },
      { name: 'Emily Meyers', profile_picture: 'https://xsgames.co/randomusers/avatar.php?g=female', company: 'Paraform', email: 'emmy.meyers@paraform.net', city: 'Dallas', state: 'Texas' },
      { name: 'Sarah Brown', profile_picture: '', company: 'Twain Climate', email: 'sarah.brown@twainclimate.net', city: 'Anchorage', state: 'Alaska' },
      { name: 'Amanda Miller', profile_picture: '', company: 'McKee Investments', email: 'amy.miller@mckeeinvestiments.com', city: 'Salt Lake City', state: 'Utah' },
      { name: 'William Jones', profile_picture: '', company: 'Made Tea Holdings', email: 'will_jon@made.tea', city: 'Houston', state: 'Texas' },
    ];

    // Choose a random CEO profile
    const randomIndex = Math.floor(Math.random() * ceos.length);
    return ceos[randomIndex];
  };

  // State to hold the randomly selected CEO profile
  const [randomCEO, setRandomCEO] = useState(generateCEO());

  useEffect(() => {
    // Update the random CEO when the page loads
    setRandomCEO(generateCEO());
  }, []);

  return (
    <div className="App">
      <Flex className='topbar' align='center' justify='space-between' p='0px 10px'>
        <SideMenu/>
        <Image className='influx-logo' src='https://www.datocms-assets.com/44723/1619508708-logo-black.png' alt='naruto' objectFit='cover' />
        <Flex align='center' w='9rem' h='2.5rem' justify='space-evenly' border='1px' borderColor='gray.400' borderRadius='5px' cursor='pointer'>
          <Avatar name='Lucas Maciel' size='sm'/> 
          <Text>Lucas Maciel</Text>
        </Flex>
      </Flex>
      <Flex flexGrow='1'>
        <Box w='70%' ml='5%' mr='1rem'>
          <Heading size='lg' mt='0.5rem' mb='0.5rem' color='#222'>Opened Tickets</Heading>
          <ChatInstances />
        </Box>
        <Box w='25%' bg='#ddd' borderLeft='1px' borderLeftColor='#bbb' color='#444'>
          <Heading size='lg' marginTop='0.5rem'>Last Customer Profile</Heading>
          <Flex p='1rem' align='center' bg='#eee' borderRadius='1rem' m='1rem' color='#222'>
            <Avatar name={randomCEO.name} src={randomCEO.profile_picture} size='lg' mr='1rem'/>
            <Box>
              <Heading id='name_condenado' size='md' color='#222'>{randomCEO.name}</Heading>
              <Text>+1 (305) 523 0191</Text>
            </Box>
          </Flex>
          <Stack m='1rem' direction='row' spacing={2}>
            <Button leftIcon={<HiAnnotation />} colorScheme='orange' >
              Past Chats
            </Button>
            <Button leftIcon={<HiPlusCircle />} colorScheme='orange'>
              Manual Ticket
            </Button>
            <Button leftIcon={<HiInformationCircle />} colorScheme='orange'>
              Details
            </Button>
          </Stack >
            <Box m='0rem 1.5rem' textAlign='left'>
              <Divider/>
              <Text m='0.8rem 0rem'><b>Company Name:</b> {randomCEO.company}</Text>
              <Divider/>
              <Text m='0.8rem 0rem'><b>City:</b> {randomCEO.city}</Text>
              <Divider/>
              <Text m='0.8rem 0rem'><b>State:</b> {randomCEO.state}</Text>
              <Divider/>
              <Text m='0.8rem 0rem'><b>Email:</b> {randomCEO.email}</Text>
              <Divider/>
              <Text m='0.8rem 0rem'><b>Unique Customer ID:</b> AZ505-266798</Text>
              <Divider/>
              <Text m='0.4rem 0rem -1.5rem 0rem'><b>Used Software</b></Text>
              <Stack m='1.5rem -0.5rem' direction='row' spacing={2} p='0.5rem' bg='#eee' borderRadius='0.5rem'>
                <Tag variant='solid' colorScheme='blue'>Influx HR Manager</Tag>
                <Tag variant='solid' colorScheme='green'>Influx Scheduler</Tag>
                <Tag variant='outline' colorScheme='orange' ><TagLeftIcon as={HiPlusSm} />Add new</Tag>
              </Stack>
            </Box>
            <Divider/>
            <TeamWid/>
        </Box>
      </Flex>
    </div>
  );
}

export default App;
