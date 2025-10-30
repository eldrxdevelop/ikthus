# Ikthus

A modern web application built with [Next.js](https://nextjs.org) and PostgreSQL.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (version 18.0 or later)
- **npm** package manager
- **PostgreSQL** (version 12.0 or later)
- **DBeaver** (for database management)

## Database Setup

### 1. Install PostgreSQL

Download and install PostgreSQL from the [official website](https://www.postgresql.org/download/).

During installation, make note of:
- The port number (default: 5432)
- The superuser (postgres) password

### 2. Install DBeaver

Download and install DBeaver Community Edition from the [official website](https://dbeaver.io/download/).

### 3. Create Database and User

1. **Connect to PostgreSQL using DBeaver:**
   - Open DBeaver
   - Create a new connection to PostgreSQL
   - Use the superuser credentials (username: `postgres`, password: [your postgres password])
   - Host: `localhost`, Port: `5432`

2. **Create the database:**
   ```sql
   CREATE DATABASE ikthus;
   ```

3. **Create the user role:**
   ```sql
   CREATE USER ikthus WITH PASSWORD 'ikthus';
   ```

4. **Grant privileges:**
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE ikthus TO ikthus;
   GRANT ALL ON SCHEMA public TO ikthus;
   ```

### 4. Verify Database Connection

Create a new connection in DBeaver with these credentials:
- **Host:** localhost
- **Port:** 5432
- **Database:** ikthus
- **Username:** ikthus
- **Password:** ikthus

## Project Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory and add your database configuration:

```env
DATABASE_URL="postgresql://ikthus:ikthus@localhost:5432/ikthus"
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- Edit pages by modifying files in the `app/` directory
- The application uses App Router with automatic code splitting
- Pages auto-update as you edit files

## Project Structure

```
ikthus/
├── app/                    # App Router pages and layouts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── .env.local             # Local environment file       
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md             # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - PostgreSQL database documentation
- [DBeaver Documentation](https://dbeaver.io/docs/) - DBeaver usage guide

## Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL service is running
- Verify database credentials and connection string
- Check if the database and user exist with proper permissions

### Development Server Issues

- Clear the `.next` folder and restart the dev server
- Verify all dependencies are installed
- Check for port conflicts (default: 3000)
