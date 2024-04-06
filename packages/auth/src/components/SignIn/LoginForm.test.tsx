import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm /> component', () => {
  test(`has "Username" and "Password" text`, () => {
    render(<LoginForm onSubmit={() => {}} />);
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
    render(<LoginForm onSubmit={onSubmitMock} />);

    const inputUsername = screen.getByLabelText('username-input');
    fireEvent.change(inputUsername, { target: { value: 'john' } });
    expect(inputUsername).toHaveValue('john');

    const inputPassword = screen.getByLabelText('password-input');
    fireEvent.change(inputPassword, { target: { value: 'P@ssw0rd' } });
    expect(inputPassword).toHaveValue('P@ssw0rd');

    // fireEvent.click(screen.getByText(/Login/i));
    // expect(onSubmitMock).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Login'));
    expect(onSubmitMock).toHaveBeenCalledWith('john', 'P@ssw0rd');
  });
});
