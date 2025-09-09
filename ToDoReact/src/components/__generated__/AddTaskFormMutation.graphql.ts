/**
 * @generated SignedSource<<193fbdc7c0d8cf499c943604397125d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type CreateTaskInput = {
  description?: string | null | undefined;
  title: string;
};
export type AddTaskFormMutation$variables = {
  input: CreateTaskInput;
};
export type AddTaskFormMutation$data = {
  readonly createTask: {
    readonly createdAt: string;
    readonly description: string;
    readonly id: number;
    readonly status: TaskStatus;
    readonly title: string;
    readonly updatedAt: string;
  };
};
export type AddTaskFormMutation = {
  response: AddTaskFormMutation$data;
  variables: AddTaskFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "createTask",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTaskFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddTaskFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a8cb65b1903fa711fee0a44e9acd3087",
    "id": null,
    "metadata": {},
    "name": "AddTaskFormMutation",
    "operationKind": "mutation",
    "text": "mutation AddTaskFormMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    id\n    title\n    description\n    status\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "26d2ebb372836e1c20bf3dbac4185ed7";

export default node;
