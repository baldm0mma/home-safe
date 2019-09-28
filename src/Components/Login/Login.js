import React from 'react';

export const Login = () => {
  return (
    <section>
      <form>
        <label>
          Username:
          <input type='text' name='username' />
        </label>
        <label>
          Password:
          <input type='password' name='password' />
        </label>
      </form>
    </section>
  );
};
