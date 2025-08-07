package org.example.utils;

import io.github.cdimascio.dotenv.Dotenv;

/**
 * Utility class that loads the environment variables from the .env file
 */
public class ConfigLoader {
    private static final Dotenv dotenv = Dotenv.load();

    public static String getApiKey() {
        return dotenv.get("API_KEY");
    }
}
