import React, { useState, useEffect } from "react";
import { Box, Flex, Tag, Button, Heading } from "@chakra-ui/react";

export function SideMenuTicket() {
    const ticketTypes = {
        customerQuestion: { title: "Customer Question", tag: "Influx HR Manager", tagColorScheme: "blue", buttonColorScheme: "yellow" },
        requestedAssistance: { title: "Technical Assistance", tag: "Influx HR Manager", tagColorScheme: "blue", buttonColorScheme: "yellow" },
        clientQuestion: { title: "Customer Question", tag: "Influx Scheduler", tagColorScheme: "green", buttonColorScheme: "yellow" },
        clientComplaint: { title: "Client Feedback", tag: "Influx Scheduler", tagColorScheme: "green", buttonColorScheme: "yellow" },
        influxScheduler: { title: "Customer Complaint", tag: "Influx Scheduler", tagColorScheme: "green", buttonColorScheme: "red" },
        urgentIssue: { title: "Customer Complaint", tag: "Influx 360 Helper", tagColorScheme: "orange", buttonColorScheme: "red" }
    };

    const [randomTicketType, setRandomTicketType] = useState('');

    useEffect(() => {
        const ticketTypeKeys = Object.keys(ticketTypes);
        const randomIndex = Math.floor(Math.random() * ticketTypeKeys.length);
        const randomTicketKey = ticketTypeKeys[randomIndex];
        setRandomTicketType(ticketTypes[randomTicketKey]);
    }, []);

    return (
        <Box h='4rem' m='0.25rem 0rem' p='0.5rem' bg='#fff' borderRadius='0.5rem'>
            <Flex justifyContent='space-between'>
                <Heading id='side_ticket_title' size='sm'>{randomTicketType.title}</Heading>
                <Button id='side_ticket_answer' size='sm' colorScheme={randomTicketType.buttonColorScheme}>Answer</Button>
            </Flex>
            <Tag id='side_ticket_tag' variant='solid' colorScheme={randomTicketType.tagColorScheme} mt='-0.5rem'>
                {randomTicketType.tag}
            </Tag>
        </Box>
    );
}
