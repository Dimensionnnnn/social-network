import {gql} from '@apollo/client';

export const USER_SIGN_IN = gql`
  mutation UserSignIn($input: SignInRequest!) {
    userSignIn(input: $input) {
      token
      user {
        id
      }
      problem {
        message
      }
    }
  }
`;

export const USER_SIGN_UP = gql`
  mutation UserSignUp($input: SignUpRequest!) {
    userSignUp(input: $input) {
      problem {
        message
      }
      token
      user {
        id
      }
    }
  }
`;
