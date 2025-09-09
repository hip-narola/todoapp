/**
 * @generated SignedSource<<b077de6739c0fcd4e026aed9f125be59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "PENDING" | "%future added value";
export type TaskItemMutation$variables = {
  id: number;
  status: TaskStatus;
};
export type TaskItemMutation$data = {
  readonly updateTaskStatus: {
    readonly id: string;
    readonly status: TaskStatus;
    readonly updatedAt: string;
  } | null | undefined;
};
export type TaskItemMutation = {
  response: TaskItemMutation$data;
  variables: TaskItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "TaskDto",
    "kind": "LinkedField",
    "name": "updateTaskStatus",
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
        "name": "status",
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
    "name": "TaskItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TaskItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d8ac6a574d1db5930c6546cbcc1874c1",
    "id": null,
    "metadata": {},
    "name": "TaskItemMutation",
    "operationKind": "mutation",
    "text": "mutation TaskItemMutation(\n  $id: Int!\n  $status: TaskStatus!\n) {\n  updateTaskStatus(id: $id, status: $status) {\n    id\n    status\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "6c576f2ccb768ec79c0569e4a93c3e55";

export default node;
