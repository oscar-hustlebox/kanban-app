import { useSelector } from 'react-redux';
import { Flex, Table, TableContainer, Tbody, Th, Thead, Text, Tr } from '@chakra-ui/react';

import { TaskListItems } from './TaskListItems/TaskListItems';
import { RootState } from '../../../redux/store';

export const TaskList = () => {
    const tasks = useSelector((state: Pick<RootState, 'tasks'>) => state.tasks);

    return (
        <TableContainer border="1px" borderRadius={4} borderColor="gray.200" backgroundColor="#FFF">
            <Table variant="striped" backgroundColor="gray.200">
                <Thead>
                    <Tr>
                        <Th padding={2}>
                            <Flex flexDirection="row" flex="1" textAlign="left" alignItems="center">
                                <Text fontWeight="extrabold" casing="capitalize">
                                    Task
                                </Text>
                            </Flex>
                        </Th>
                        <Th padding={2}>
                            <Text fontWeight="extrabold" casing="capitalize" textAlign="right">
                                Actions
                            </Text>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody background="#FFF">
                    <TaskListItems tasks={tasks} />
                </Tbody>
            </Table>
        </TableContainer>
    );
};
