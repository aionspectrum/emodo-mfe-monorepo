import { FC } from 'react';
import LoginForm, { LoginFormProps } from './LoginForm';
import CenterContentWrapper from '../common/CenterContentWrapper';

const SignIn: FC<LoginFormProps> = (props) => {
  return (
    <CenterContentWrapper>
      <h3>Login page</h3>
      <LoginForm {...props} />
    </CenterContentWrapper>
  );
};

export { type LoginFormProps } from './LoginForm';
export { type ILoginInput } from './LoginForm';
export default SignIn;
