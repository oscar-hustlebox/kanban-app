import React from 'react';
import { TaskListItem } from '../TaskListItem/TaskListItem';
import { TaskState } from '../../../../redux/slices/tasks/slice';

export const TaskListItems = ({ tasks }: { tasks: TaskState[] }) => {
    return (
        <>
            {tasks.map((task) => (
                <TaskListItem key={task.id} task={task} />
            ))}
        </>
    );
};
