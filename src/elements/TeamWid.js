import React, { useState, useEffect } from "react";
import { Box, Flex, Tag, Button, Heading, Avatar } from "@chakra-ui/react";
import { HiChat } from "react-icons/hi";

export function TeamWid() {
  const [isOnline, setIsOnline] = useState({
      jay: false,
      joe: true,
      jordan: false,
      zee: false,
      bogdan: false,
      marcia: false,
  });

  const online_people = {
    jay: 'Jacob Seafarer',
    joe: 'Joseph Colds',
    jordan: 'Lana Jordan',
    zee: 'Mateus Pinheiro',
    bogdan: 'Bogdan Stöckert',
    marcia: 'Margaery Liu',
  };

  useEffect(() => {
    const onlinePeopleKeys = Object.keys(isOnline);
    const intervals = {};

    const toggleOnlineStatus = (person) => {
        setIsOnline(prevState => ({
            ...prevState,
            [person]: !prevState[person],
        }));
    };

    const getRandomTime = () => {
        const minTime = 40000; // 40 seconds in milliseconds
        const maxTime = 90000; // 90 seconds in milliseconds
        return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    };

    onlinePeopleKeys.forEach(person => {
        intervals[person] = setInterval(() => {
            toggleOnlineStatus(person);
            clearInterval(intervals[person]);
            intervals[person] = setInterval(() => {
                toggleOnlineStatus(person);
            }, getRandomTime());
        }, getRandomTime());
    });

    return () => {
        Object.values(intervals).forEach(interval => clearInterval(interval));
    };
}, [isOnline]);

    return (
        <Box h='40%' p='0.5rem' bg='#eee'>
            {/* Render each person */}
            {Object.keys(isOnline).map(person => (
                <Box key={person} h='4rem' m='0.25rem 0.25rem' p='0.5rem' bg='#fff' borderRadius='0.5rem'>
                    <Flex gap='1rem' justifyContent='space-between' justifyItems='stretch' color={isOnline[person] ? 'grey' : 'initial'}>
                        <Avatar name={online_people[person]} position='relative'>
                            {isOnline[person] && <div className='online-ball'></div>}
                        </Avatar>
                        <div style={{flexGrow: '1', textAlign: 'left', color: isOnline[person] ? 'black' : '#CBD5E0'}}>
                            <Heading size='sm'>{online_people[person]}</Heading>
                            <Tag variant='solid' colorScheme='orange' backgroundColor={isOnline[person] ? 'gray.500' : 'gray.300'}>
                                {online_people[person].includes('HR') ? 'HR Agent' : 'Agent'}
                            </Tag>
                        </div>
                        <Button size='sm'>
                            Message &nbsp;<HiChat size='1.25rem'/>
                        </Button>
                    </Flex>
                </Box>
            ))}
        </Box>
    );
}
