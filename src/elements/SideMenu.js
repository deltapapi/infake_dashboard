import React, { useState, useEffect } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Box,
    Heading,
    Text,
    Center
} from '@chakra-ui/react';
import { SideMenuTicket } from './SideMenuTicket';
import { ModalComponent } from './ModalAlert'; 

export function SideMenu() {
    const btnRef = React.useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showModal, setShowModal] = useState(false); // State for controlling Modal visibility

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [ticketCount, setTicketCount] = useState(0);

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setTimer(0); // Reset timer when inactive
        }

        return () => clearInterval(interval);
    }, [isActive]);

    useEffect(() => {
        const minTime = 20000; // 20 seconds in milliseconds
        const maxTime = 60000; // 60 seconds in milliseconds
        const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    
        const ticketInterval = setInterval(() => {
            setTicketCount(prevCount => prevCount + 1);
        }, randomTime); // New random interval
    
        return () => clearInterval(ticketInterval);
    }, []);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    const handleStart = () => {
        setIsActive(true);
        onOpen(); // Open the drawer when the timer starts
    };

    const handleStop = () => {
        setIsActive(false);
        setShowModal(true); // Open the Modal when the drawer is closed
        onClose(); // Close the drawer when the timer stops
    };

    return (
        <>
            <Button ref={btnRef} colorScheme='orange' onClick={handleStart}>
                Pause Work
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                size='sm'
                onClose={handleStop} // Stop the timer when the drawer is closed
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Paused Session</DrawerHeader>

                    <DrawerBody>
                        <Box bg='#eee' m='0.5rem' borderRadius='0.5rem' p='0.5rem' position='relative' maxH='69%' overflowY='auto'>
                        <Center as='b' fontSize='xl' w='3rem' bg={ticketCount > 14 ? 'red.300' : ticketCount > 9 ? 'red.200' : '#fff'} position='absolute' right='0.5rem' top='0.2rem' borderRadius='0.5rem'>{ticketCount}</Center>
                            <Heading size='md'>New Tickets</Heading>
                            {[...Array(ticketCount)].map((_, index) => (
                                <SideMenuTicket key={index} />
                            ))}
                        </Box>
                        <Box bg='#eee' m='0.5rem' borderRadius='0.5rem' p='0.5rem'>
                            <Heading size='md'>Tickets on hold</Heading>
                            <SideMenuTicket/>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Box mr='1rem'>Time Away: <Text fontSize='2xl' as='b' bg={Math.floor(timer / 60) > 9 ? 'red.300' : Math.floor(timer / 60) > 4 ? 'red.200' : ''} p='0px 5px' borderRadius='5px'>{formatTime(timer)}</Text>
                        </Box>
                        <Button colorScheme="orange" mr={3} onClick={onClose}>
                            Return
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <ModalComponent isOpen={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}
