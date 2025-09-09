/**
 * @generated SignedSource<<8b9507c2978a791c701d52b125469d31>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type TaskListQuery$variables = Record<PropertyKey, never>;
export type TaskListQuery$data = {
  readonly getAllTasks: ReadonlyArray<{
    readonly createdAt: string;
    readonly description: string;
    readonly id: number;
    readonly status: TaskStatus;
    readonly title: string;
    readonly updatedAt: string;
  }>;
};
export type TaskListQuery = {
  response: TaskListQuery$data;
  variables: TaskListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "getAllTasks",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TaskListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "96708d7ed7dcfb6873659b585686009b",
    "id": null,
    "metadata": {},
    "name": "TaskListQuery",
    "operationKind": "query",
    "text": "query TaskListQuery {\n  getAllTasks {\n    id\n    title\n    description\n    status\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "a885ddecc587fb4e56d70a9349306c65";

export default node;
