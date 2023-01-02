import { Box, Flex } from '@chakra-ui/react';
import { TaskAdd } from './TaskAdd/TaskAdd';
import { TaskList } from './TaskList';
import { TopBar } from '../TopBar/TopBar';

export const TaskView = () => {
    return (
        <>
            <TopBar />
            <Flex
                flexDir="column"
                height="100vh"
                padding={2}
                borderTop="1px"
                borderColor="gray.200"
                backgroundColor="gray.100"
            >
                <TaskAdd />
                <Box marginTop={4} paddingX={4}>
                    <TaskList />
                </Box>
            </Flex>
        </>
    );
};
