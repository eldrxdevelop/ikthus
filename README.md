# Add Auth0 config (.env.local)

1. Create a file named `.env.local` in the project root.
2. Add the following keys (replace placeholders with values from your Auth0 Application settings):

```
AUTH0_DOMAIN=your-tenant-region.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
AUTH0_AUDIENCE=your-api-identifier
AUTH0_SCOPE="openid profile email"
```