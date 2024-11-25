import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function startServer() {
  try {
      await mongoose.connect(config.database_url as string);
      console.log("Connected to the database");

      app.listen(config.port, () => {
          console.log(`Server running on port ${config.port}`);
      });
  } catch (error) {
      console.error("Database connection error:", error);
  }
}

// Start the server
startServer();

// Export the app for Vercel
// export default app;