# mfe-apps-user-services

Micro Frontend apps with user authentication and possible services

# Start Micro Frontends

You need to start all applications, then the main one (container) will be able to use them

Each app is running on a specific port, so when you run them locally they will have such addresses:

http://localhost:8080/ - container app
http://localhost:8081/ - auth app

## Start auth

`% cd packages/auth`
`% yarn` to install dependencies
`% yarn build` to build the project
`% yarn preview` to run the built project

- Note: if you make changes to the app you dont't need to build and preview it, instead you need to start it in dev:
  `% yarn dev`
  But container app will see only what's running under `% yarn preview`

## Start container

`% cd packages/container`
`% yarn` - install dependencies
`% yarn dev` - run application

# Test Tips

## Find text in DOM

```
// const usernameText = screen.getByText('Username');
// expect(usernameText).toBeDefined();
/* It's better to use .getByText(/Username/i)) instead of .getByText("Username"))
    as this way "username" can be part of a larger phrase and have capital or lower case letters */
expect(screen.getByText(/Username/i)).toBeDefined();
```
