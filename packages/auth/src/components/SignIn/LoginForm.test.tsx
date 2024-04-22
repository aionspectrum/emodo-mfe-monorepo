import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm, { SIGN_UP_BUTTON_NAME } from './LoginForm';
import { SIGNUP_PATH } from '../../constants/routes';

describe('<LoginForm /> component', () => {
  test(`has "Username" and "Password" text`, () => {
    render(<LoginForm onSubmit={() => {}} pathToSignUp="/signup" />, {
      wrapper: BrowserRouter,
    });
    // const usernameText = screen.getByText('Username');
    // expect(usernameText).toBeDefined();
    /* It's better to use .getByText(/Username/i)) instead of .getByText("Username")) 
        as this way "username" can be part of a larger phrase and have capital or lower case letters */
    expect(screen.getByText(/Username/i)).toBeDefined();
    expect(screen.getByText(/Password/i)).toBeDefined();
  });

  // it('should call the onChange callback when value change', () => {
  //   // Arrange
  //   const handleChange = jest.fn();
  //   render(<Input value="" onChange={handleChange} />);
  //   const input = screen.getByRole('textbox');

  //   // Act
  //   fireEvent.change(input, { target: { value: 'Change' } });

  //   // Assert
  //   expect(handleChange).toHaveBeenCalledWith('Change');
  // });

  test(`input username and password, then click "Login" button to trigger onSubmit callback function`, () => {
    const onSubmitMock = vi.fn();
    render(<LoginForm onSubmit={onSubmitMock} pathToSignUp="/signup" />, {
      wrapper: BrowserRouter,
    });

    const inputUsername = screen.getByLabelText('username-input');
    fireEvent.change(inputUsername, { target: { value: 'john' } });
    expect(inputUsername).toHaveValue('john');

    const inputPassword = screen.getByLabelText('password-input');
    fireEvent.change(inputPassword, { target: { value: 'P@ssw0rd' } });
    expect(inputPassword).toHaveValue('P@ssw0rd');

    // fireEvent.click(screen.getByText(/Login/i));
    // expect(onSubmitMock).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Login'));
    expect(onSubmitMock).toHaveBeenCalledWith({
      username: 'john',
      password: 'P@ssw0rd',
    });
  });

  test(`click "Cancel" button to trigger onCancel callback function`, () => {
    const onSubmitMock = vi.fn();
    const onCancelMock = vi.fn();
    render(
      <LoginForm
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
        pathToSignUp="/signup"
      />,
      {
        wrapper: BrowserRouter,
      }
    );

    fireEvent.click(screen.getByText(/Cancel/i));
    expect(onCancelMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledTimes(0);
  });

  test('should navigate to /signup when "Sign Up" link is clicked', () => {
    render(
      <LoginForm
        onSubmit={() => {}}
        onCancel={() => {}}
        pathToSignUp="/signup"
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(
      screen.getByRole('link', { name: SIGN_UP_BUTTON_NAME })
    ).toHaveAttribute('href', SIGNUP_PATH);
  });
});
