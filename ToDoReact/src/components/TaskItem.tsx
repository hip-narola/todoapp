import React, { useState } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay';
import {
  View,
  Text,
  Button,
  Flex,
  ProgressCircle
} from '@adobe/react-spectrum';
import CheckmarkCircle from '@spectrum-icons/workflow/CheckmarkCircle';
import Clock from '@spectrum-icons/workflow/Clock';
import { TaskItemMutation } from './__generated__/TaskItemMutation.graphql';
import type { TaskListQuery } from './__generated__/TaskListQuery.graphql';
import { toast } from 'react-toastify';

const UpdateTaskStatusMutation = graphql`
  mutation TaskItemMutation($id: Int!, $status: TaskStatus!) {
    updateTaskStatus(id: $id, status: $status) {
      id
      status
      updatedAt
    }
  }
`;

type Task = NonNullable<TaskListQuery['response']['getAllTasks']>[number];

interface TaskItemProps {
  task: Task;
  setReloadFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, setReloadFlag }) => {
  const [commitMutation] = useMutation<TaskItemMutation>(UpdateTaskStatusMutation);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggleStatus = () => {
    setIsUpdating(true);
    const newStatus = task.status === 'PENDING' ? 'COMPLETED' : 'PENDING';

    commitMutation({
      variables: { id: Number(task.id), status: newStatus },
      onCompleted: () => {
        setIsUpdating(false);
        toast.success('Task status updated successfully');
        if (setReloadFlag) setReloadFlag(flag => !flag);
      },
      onError: (error) => {
        console.error('Error updating task status:', error);
        toast.error('Failed to update task status');
        setIsUpdating(false);
      },
    });
  };

  const isCompleted = task.status === 'COMPLETED';

  return (
    <View
      backgroundColor="gray-50"
      borderRadius="medium"
      padding="size-200"
      marginY="size-150"
      UNSAFE_style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}
    >
      <Flex direction="row" justifyContent="space-between" gap="size-200">
        {/* Task details */}
        <Flex direction="column" flex="1" gap="size-75">
          <Text UNSAFE_style={{ fontWeight: 600, fontSize: '1rem', textAlign: 'left' }}>
            {task.title}
          </Text>
          {task.description && (
            <Text UNSAFE_style={{ color: '#666', fontSize: '0.85rem', textAlign: 'left' }}>
              {task.description}
            </Text>
          )}
        </Flex>

        {/* Status badge and button */}
        <Flex direction="row" alignItems="center" gap="size-200">
          <Flex
            direction="row"
            alignItems="center"
            gap="size-100"
            UNSAFE_style={{
              background: isCompleted ? '#e6f7ec' : '#fff4e6',
              borderRadius: '12px',
              padding: '2px 8px',
            }}
          >
            {isCompleted ? (
              <CheckmarkCircle size="S" color="positive" />
            ) : (
              <Clock size="S" color="notice" />
            )}
            <Text
              UNSAFE_style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: isCompleted
                  ? 'var(--spectrum-global-color-green-600)'
                  : 'var(--spectrum-global-color-orange-600)',
              }}
            >
              {isCompleted ? 'Completed' : 'Pending'}
            </Text>
          </Flex>

          <Button
            variant={isCompleted ? 'secondary' : 'cta'}
            onPress={handleToggleStatus}
            isDisabled={isUpdating}
          >
            {isUpdating ? (
              <ProgressCircle aria-label="Loading..." isIndeterminate />
            ) : isCompleted ? 'Mark Pending' : 'Mark Complete'}
          </Button>
        </Flex>
      </Flex>
    </View>
  );
};

export default TaskItem;