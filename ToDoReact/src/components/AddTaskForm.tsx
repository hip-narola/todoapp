import React, { useState, Suspense } from 'react';
import {
  Heading,
  TextField,
  TextArea,
  Button,
  Flex,
  Content,
  Divider,
  View,
} from '@adobe/react-spectrum';
import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay';
import { AddTaskFormMutation } from './__generated__/AddTaskFormMutation.graphql';
import { toast } from 'react-toastify';

const CreateTaskMutation = graphql`
  mutation AddTaskFormMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;

interface AddTaskFormProps {
  onTaskAdded?: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [commitMutation] = useMutation<AddTaskFormMutation>(CreateTaskMutation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    commitMutation({
      variables: {
        input: {
          title: title.trim(),
          description: description.trim() || null,
        },
      },
      onCompleted: (response) => {
        setTitle('');
        setDescription('');
        setIsSubmitting(false);
        toast.success('Task created successfully!');
        if (onTaskAdded) onTaskAdded();
        console.log('Task created successfully', response);

      },
      onError: (error) => {
        console.error('Error creating task:', error);
        setIsSubmitting(false);
      },
      updater: (store) => {
        store.invalidateStore();
      },
    });
  };

  return (
    <Content>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="size-200">
          <TextField
            label="Title"
            isRequired
            placeholder="Enter task title..."
            value={title}
            onChange={setTitle}
            width="100%"
          />
          <TextArea
            label="Description"
            placeholder="Enter task description (optional)..."
            value={description}
            onChange={setDescription}
            width="100%"
            maxLength={200}
          />
          <Divider marginY="size-100" />
          <Flex justifyContent="end">
            <Button
              type="submit"
              variant="cta"
              isDisabled={isSubmitting || !title.trim()}
            >
              {isSubmitting ? 'Adding...' : 'Add Task'}
            </Button>
          </Flex>
        </Flex>
      </form>
    </Content>
  );
};

export default AddTaskForm;
