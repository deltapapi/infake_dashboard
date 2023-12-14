import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

export function ChatInstances() {
    const [chatTickets, setChatTickets] = useState([]);

    const [usedNames, setUsedNames] = useState([]);
    const [usedMessages, setUsedMessages] = useState([]);
    
    const generateRandomTicket = () => {
        const possibleNames = [
            "Alexander Montgomery",
            "Benjamin Stanley",
            "Charles Pastor",
            "Edward Hilton",
            "Franklin Sinclair",
            "Harrison Wellington",
            "Theodore Hampton",
            "William Merline",
            "Sebastian Regiers",
            "Nathaniel Hawthorne",
            "Charlotte Williams",
            "Isabella Fitzgerald",
            "Elizabeth Harrington",
            "Victoria Shapur",
            "Amelia Sanders",
            "Penelope Wellington",
            "Genevieve Hampton",
            "Eleanor Kirkpatrick",
            "Josephine Kensington",
            "Seraphine Taylor"
            // Add other possible names here
        ];

        const possibleMessages = [
            "I've been encountering some technical issues while trying to access my account. Can you please help me troubleshoot this problem?",
            "I'm having trouble navigating through your site to find specific information. Can you guide me to the right page?",
            "Hi there! I have a few suggestions for improving your app's user interface. Is there a way I can share my feedback with your team?",
            "Hey, I'm facing some difficulties completing a transaction on your website. Any ideas on how to resolve this?",
            "Hello, I have some questions about your subscription plans. Can you provide more details on the features included?",
            "Hi, I'm having trouble navigating through your site to find specific information. Can you guide me to the right page?",
            "Hey, I received an email about an upcoming event, but there's some confusion about the schedule. Can you clarify?",
            "Hi there! I noticed an error message while using your service. How can I fix this?",
            "Hello, I have some inquiries about the warranty on a product I purchased. Could you provide more details?",
            "Hey, I'm experiencing slow loading times on your platform. Is this a known issue?",
            "I'm absolutely furious! Your website's functionality is abysmal! I've wasted hours trying to navigate through broken links, glitchy pages, and your so-called 'customer support' is an utter joke! I want a refund and a sincere apology for this appalling service! Get your act together!",
            "I've had it up to here with your terrible service! I've been a loyal customer for years, and this is the thanks I get? My order was delayed, wrong items delivered, and your support is non-existent! I demand immediate resolution or I'm taking my business elsewhere!",
            "I'm encounering an isue whil trying to log in.",
            "Your websit is so slo to load.",
            "I nedd help with an issue, its so frustratig!",
            "How can I acss my account?",
            "Theres a bug in the payment procees.",
            "Your serices are so disapponting!",
            "I'm experiecing technical dificulties.",
            "Whre can I find the FAQs?",
            "You're servic is terible, I want a refund!",
            "I have a questin about my bill, plese help.",
            "This is ubelievable, I've had enough!",
            "Why is your custmer service line always busy?",
            "I'm not satisfaid with your servces at all.",
            "Ther's an issue with the shpping delivey.",
            "I'm fnding it diffcult to navgiate your site.",
            "This is unaccepptable, fix it!",
            "Your support staf is so unhelpful.",
            "There's a seriuos problm with my accunt.",
            "I'm highly disapointed with your custmer care.",
            "I'm beyond frustated with your incomptent service!"
            // Add other possible messages here
        ];

        // Generate a new ticket with a name and message not in the used list
        let randomName = "";
        let randomMessage = "";

        // Generate unique name
        do {
            const randomNameIndex = Math.floor(Math.random() * possibleNames.length);
            randomName = possibleNames[randomNameIndex];
        } while (usedNames.includes(randomName));

        // Generate unique message
        do {
            const randomMessageIndex = Math.floor(Math.random() * possibleMessages.length);
            randomMessage = possibleMessages[randomMessageIndex];
        } while (usedMessages.includes(randomMessage));

        // Update the used lists
        if (usedNames.length >= 10) {
            const updatedNames = usedNames.slice(1); // Remove the oldest name from the list
            updatedNames.push(randomName); // Add the new name
            setUsedNames(updatedNames);
        } else {
            setUsedNames([...usedNames, randomName]);
        }

        if (usedMessages.length >= 10) {
            const updatedMessages = usedMessages.slice(1); // Remove the oldest message from the list
            updatedMessages.push(randomMessage); // Add the new message
            setUsedMessages(updatedMessages);
        } else {
            setUsedMessages([...usedMessages, randomMessage]);
        }

        const newTicket = {
            customerName: randomName,
            customerMessage: randomMessage,
        };

        return newTicket;
    };

    const addNewRandomTicket = () => {
        const newTicket = generateRandomTicket();
        setChatTickets(prevTickets => [newTicket, ...prevTickets]);
    };

    useEffect(() => {
        // Generate initial 10 random chat tickets on component mount
        const initialTickets = Array.from({ length: 10 }, () => generateRandomTicket());
        setChatTickets(initialTickets);

        // Add a new random ticket every 70 seconds
        const interval = setInterval(() => {
            addNewRandomTicket();
        }, 80000); // 80 seconds in milliseconds

        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = (index) => {
        // Handle button click based on the index or any specific logic
        console.log(`Button clicked for ticket at index ${index}`);
    };

    return (
        <div className="meiao">
            {chatTickets.map((ticket, index) => (
                <Flex key={index} className='individual_chat' h='6rem' borderRadius='10px' m='0.5rem 0.25rem' bg='#eee' gap='1rem' p='0.75rem' align='center' justify='space-between'>
                    <Box align='left'>
                        <Heading size='md'> Chat Ticket </Heading>
                        <Text fontSize='sm' textColor='#555' lineHeight='0.9rem'>{ticket.customerName} -<b>Last Message:</b> {ticket.customerMessage}</Text>
                    </Box>
                    <Flex direction='column' gap='5px'>
                        <Button size='sm' onClick={() => handleButtonClick(index)}>Answer</Button>
                        <Button size='sm' colorScheme='orange' variant='outline'>Transfer</Button>
                    </Flex>
                </Flex>
            ))}
        </div>
    );
}
