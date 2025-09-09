import React, { useEffect } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { TaskListQuery } from './__generated__/TaskListQuery.graphql';
import TaskItem from './TaskItem';
import { View, Flex, Text } from '@adobe/react-spectrum';

const TaskListQueryGraphQL = graphql`
  query TaskListQuery {
    getAllTasks {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;

interface TaskListProps {
  reloadFlag: boolean;
  setReloadFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskList: React.FC<TaskListProps> = ({ reloadFlag, setReloadFlag }) => {
  const data = useLazyLoadQuery<TaskListQuery>(
    TaskListQueryGraphQL,
    {},
    { fetchPolicy: reloadFlag ? 'network-only' : 'store-or-network' }
  );

  useEffect(() => {
    if (reloadFlag) {
      setReloadFlag(false);
    }
  }, [reloadFlag, setReloadFlag]);

  return (
    <View>
      <Flex direction="column" gap="size-200">
        {data.getAllTasks?.map((task) => (
          <TaskItem key={task.id} task={task} setReloadFlag={setReloadFlag} />
        ))}
        {(!data.getAllTasks || data.getAllTasks.length === 0) && (
          <Text>No tasks found. Add a new task to get started!</Text>
        )}
      </Flex>
    </View>
  );
};

export default TaskList;