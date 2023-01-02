import React, { ReactElement } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InputField } from './components/InputField';
import { SubmitButton } from './components/SubmitButton';
import { CancelButton } from './components/CancelButton';
import { ErrorMessage } from './components/ErrorMessage';
import { TextAreaField } from './components/TextAreaField';
import { TaskState } from '../../../redux/slices/tasks/slice';

export type FormValues = {
    name: string;
    isCompleted: boolean;
    description?: string;
    favorite?: boolean;
};

/* Creating a schema that is used to validate the form values. */
const schema = yup
    .object({
        name: yup.string().required(),
        isCompleted: yup.boolean().notRequired(),
        description: yup.string().notRequired(),
        favorite: yup.boolean().notRequired(),
    })
    .required();

type TaskFormProps = {
    task?: TaskState;
    handleCancel?: () => void;
};

export const TaskForm = ({ task, handleCancel }: TaskFormProps): ReactElement => {
    /* Using the `useForm` hook to create a form. */
    const methods = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: task ? task : { name: '', isCompleted: false },
    });

    const { reset, handleSubmit, formState } = methods;

    /**
     * The `onSubmit` function is a callback function that is called when the form is submitted. It takes
     * the form values as an argument and dispatches an action to the redux store
     * @param formValues - The values of the form.
     */
    const onSubmit: SubmitHandler<FormValues> = () => {
        /* Dispatching an action to the redux store. */
        if (task && handleCancel) {
            // TODO dispatch(updateTask({ ...task, ...formValues }));
            handleCancel();
        } else {
            // TODO dispatch(addTask({ ...formValues, id: uuidv4() }));
        }
        reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={2} alignItems="center">
                    <InputField
                        name="name"
                        labelText={task ? '' : 'Name *'}
                        placeholderText="e.g. Wash the car, take out the trash"
                        isInvalid={!!formState.errors.name}
                    />
                    <TextAreaField
                        name="description"
                        labelText={task ? '' : 'Description (optional)'}
                        placeholderText="e.g. Wash the car, take out the trash"
                        isInvalid={!!formState.errors.name}
                    />
                    <Flex gap={2}>
                        <SubmitButton isEditing={!!task} />
                        <CancelButton handleClose={handleCancel} />
                    </Flex>
                </SimpleGrid>
                {formState.errors && <ErrorMessage message={formState.errors?.name?.message?.toString() || ''} />}
            </form>
        </FormProvider>
    );
};
