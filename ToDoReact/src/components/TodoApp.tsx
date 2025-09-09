import React, { Suspense, useState } from 'react';
import {
  View,
  Heading,
  ProgressCircle,
  Flex,
  Button,
  Dialog,
  DialogContainer,
  Content,
  Divider,

  ActionButton
} from '@adobe/react-spectrum';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const TodoApp: React.FC = () => {
  const [reloadFlag, setReloadFlag] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleTaskAdded = () => {
    setReloadFlag(flag => !flag);
  };

  return (
    <View padding="size-300" maxWidth="800px" margin="0 auto">
      <Flex direction="column" gap="size-300">
        <Flex direction="row" alignItems="center" justifyContent="space-between" marginBottom="size-200">
          <Heading level={1}>Task Manager</Heading>
          <Button
            variant="cta"
            onPress={() => setIsOpen(true)}
          >
            + Add New Task
          </Button>
        </Flex>

        <DialogContainer onDismiss={() => setIsOpen(false)}>
          {isOpen &&
            <Dialog>
              <Heading>Add New Task</Heading>
              <ActionButton
                isQuiet
                aria-label="Close"
                onPress={() => setIsOpen(false)}
                UNSAFE_style={{ position: 'absolute', top: 8, right: 8 }}
              >
                ✕
              </ActionButton>

              <Divider marginY="size-100" />

              <Content>
                <Suspense fallback={<ProgressCircle aria-label="Loading..." isIndeterminate />}>
                  <AddTaskForm
                    onTaskAdded={() => {
                      handleTaskAdded();
                      setIsOpen(false);
                    }}
                  />
                </Suspense>
              </Content>
            </Dialog>
          }
        </DialogContainer>

        <Suspense fallback={<ProgressCircle aria-label="Loading tasks..." isIndeterminate />}>
          <TaskList reloadFlag={reloadFlag} setReloadFlag={() => {
            handleTaskAdded();
          }} />
        </Suspense>
      </Flex>
    </View>
  );
};

export default TodoApp;