import { api } from './api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Account = {
  __typename?: 'Account';
  Orders?: Maybe<ModelOrderConnection>;
  id?: Maybe<Scalars['ID']['output']>;
};


export type AccountOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelOrderConnection = {
  __typename?: 'ModelOrderConnection';
  items: Array<Maybe<Order>>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type Order = {
  __typename?: 'Order';
  Account?: Maybe<Account>;
  accountID: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  ordersByAccountID?: Maybe<ModelOrderConnection>;
};


export type QueryOrdersByAccountIdArgs = {
  accountID: Scalars['ID']['input'];
};

export type OrdersByAccountIdQueryVariables = Exact<{
  accountID: Scalars['ID']['input'];
}>;


export type OrdersByAccountIdQuery = { __typename?: 'Query', ordersByAccountID?: { __typename?: 'ModelOrderConnection', items: Array<{ __typename?: 'Order', id: string, Account?: { __typename?: 'Account', id?: string | null, Orders?: { __typename?: 'ModelOrderConnection', items: Array<{ __typename?: 'Order', id: string } | null> } | null } | null } | null> } | null };


export const OrdersByAccountIdDocument = `
    query OrdersByAccountID($accountID: ID!) {
  ordersByAccountID(accountID: $accountID) {
    items {
      id
      Account {
        id
        Orders {
          items {
            id
          }
        }
      }
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    OrdersByAccountID: build.query<OrdersByAccountIdQuery, OrdersByAccountIdQueryVariables>({
      query: (variables) => ({ document: OrdersByAccountIdDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
// Note: I changed the `d` to a `D` on `useLazyOrdersByAccountIDQuery` to demonstrate the difference
export const { useOrdersByAccountIdQuery, useLazyOrdersByAccountIDQuery } = injectedRtkApi;

