import { useState } from 'react';
import { Flex, Td, Text, Tr, Checkbox, IconButton } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, StarIcon } from '@chakra-ui/icons';

import { TaskForm } from '../../TaskForm/TaskForm';
import { TaskState } from '../../../../redux/slices/tasks/slice';

type TaskListItemProps = { task: TaskState };

export const TaskListItem = ({ task }: TaskListItemProps) => {
    const [selected, setSelected] = useState<TaskState | null>();

    /* Checking if the selected task is the same as the current task. */
    const isSelected = selected?.id === task.id;

    return (
        <>
            <Tr>
                <Td padding={2} overflow="hidden" wordBreak="break-word">
                    {selected?.id === task.id ? (
                        <TaskForm task={task} handleCancel={() => setSelected(null)} />
                    ) : (
                        <Flex gap={4} alignItems="center">
                            <Checkbox
                                isChecked={task.isComplete}
                                onChange={() => {
                                    // TODO dispatch(toggleTaskComplete(task.id));
                                }}
                                size="lg"
                                colorScheme="green"
                                padding={2}
                            />
                            <Flex gap={2} alignItems="center">
                                <Text
                                    {...(task.isComplete
                                        ? { textDecorationColor: 'blackAlpha.500', textDecoration: 'line-through' }
                                        : {})}
                                >
                                    {task.name}
                                </Text>
                            </Flex>
                        </Flex>
                    )}
                </Td>
                <Td padding={2}>
                    <Flex alignSelf="right" justifyContent="flex-end" gap={2}>
                        <IconButton
                            colorScheme={task.favorite ? 'yellow' : 'gray'}
                            aria-label="favorited task"
                            icon={<StarIcon />}
                            onClick={() => {
                                // TODO dispatch(favoriteTask(task.id));
                            }}
                            disabled={isSelected}
                        />
                        <IconButton
                            colorScheme="red"
                            aria-label="delete task"
                            icon={<DeleteIcon />}
                            onClick={() => {
                                // TODO dispatch(removeTask(task.id));
                            }}
                            disabled={isSelected}
                        />
                        <IconButton
                            colorScheme="teal"
                            aria-label="edit task"
                            icon={<EditIcon />}
                            onClick={() => setSelected(task)}
                            disabled={isSelected}
                        />
                    </Flex>
                </Td>
            </Tr>
        </>
    );
};
