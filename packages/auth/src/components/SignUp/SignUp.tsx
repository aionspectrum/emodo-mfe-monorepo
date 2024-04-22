import { FC } from 'react';
import CenterContentWrapper from '../common/CenterContentWrapper';
import SignUpForm, { SignUpFormProps } from './SignUpForm';

const SignUp: FC<SignUpFormProps> = (props) => {
  return (
    <CenterContentWrapper>
      <h3>Registration page</h3>
      <SignUpForm {...props} />
    </CenterContentWrapper>
  );
};

export default SignUp;
