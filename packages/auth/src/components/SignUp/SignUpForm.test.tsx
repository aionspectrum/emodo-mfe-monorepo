import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUpForm, { SIGN_IN_BUTTON_NAME } from './SignUpForm';
import { LOGIN_PATH } from '../../constants/routes';

// const REGISTRATION_INPUT_MOCK = {
//   username: 'john',
//   email: 'john@mail.com',
//   password: 'P@ssw0rd',
//   confirmPassword: 'P@ssw0rd',
// };

describe('<SignUpForm /> component', () => {
  test(`has texts "Username", "e-mail", "Password" and "Confirm Password"`, () => {
    render(<SignUpForm onSubmit={() => {}} pathToLogIn="/login" />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText(/Username/i)).toBeDefined();
    expect(screen.getByText('e-mail')).toBeDefined();
    expect(screen.getByText('Password')).toBeDefined();
    expect(screen.getByText('Confirm Password')).toBeDefined();
  });

  test('input username, e-mail, password and confirm password, then click "Login" button to trigger onSubmit callback function', () => {
    const onSubmitMock = vi.fn();
    render(<SignUpForm onSubmit={onSubmitMock} pathToLogIn="/login" />, {
      wrapper: BrowserRouter,
    });

    const inputUsername = screen.getByLabelText('username-input');
    fireEvent.change(inputUsername, { target: { value: 'john' } });
    expect(inputUsername).toHaveValue('john');

    const inputEmail = screen.getByLabelText('email-input');
    fireEvent.change(inputEmail, { target: { value: 'john@mail.com' } });
    expect(inputEmail).toHaveValue('john@mail.com');

    const inputPassword = screen.getByLabelText('password-input');
    fireEvent.change(inputPassword, { target: { value: 'P@ssw0rd' } });
    expect(inputPassword).toHaveValue('P@ssw0rd');

    // fireEvent.click(screen.getByText(/Login/i));
    // expect(onSubmitMock).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Register'));
    expect(onSubmitMock).toHaveBeenCalledWith({
      username: 'john',
      email: 'john@mail.com',
      password: 'P@ssw0rd',
    });
  });

  // test(`click "Cancel" button to trigger onCancel callback function`, () => {
  //   const onSubmitMock = vi.fn();
  //   const onCancelMock = vi.fn();
  //   render(<LoginForm onSubmit={onSubmitMock} onCancel={onCancelMock} />, {
  //     wrapper: BrowserRouter,
  //   });

  //   fireEvent.click(screen.getByText(/Cancel/i));
  //   expect(onCancelMock).toHaveBeenCalledTimes(1);
  //   expect(onSubmitMock).toHaveBeenCalledTimes(0);
  // });

  test('should navigate to /login when "Sign Ip" link is clicked', () => {
    render(
      <SignUpForm
        onSubmit={() => {}}
        onCancel={() => {}}
        pathToLogIn="/login"
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(
      screen.getByRole('link', { name: SIGN_IN_BUTTON_NAME })
    ).toHaveAttribute('href', LOGIN_PATH);
  });
});
