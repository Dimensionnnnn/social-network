import {gql} from '@apollo/client';

export const SIGN_IN_RESPONSE_FRAGMENT = gql`
  fragment SignInResponse on SignInResponse {
    problem {
      message
    }
    token
    user {
      id
    }
  }
`;

export const SIGN_UP_RESPONSE_FRAGMENT = gql`
  fragment SignUpResponse on SignUpResponse {
    problem {
      message
    }
    token
    user {
      id
    }
  }
`;

export const USER_SIGN_IN = gql`
  ${SIGN_IN_RESPONSE_FRAGMENT}
  mutation UserSignIn($input: SignInRequest!) {
    userSignIn(input: $input) {
      ...SignInResponse
    }
  }
`;

export const USER_SIGN_UP = gql`
  ${SIGN_UP_RESPONSE_FRAGMENT}
  mutation UserSignUp($input: SignUpRequest!) {
    userSignUp(input: $input) {
      ...SignUpResponse
    }
  }
`;
