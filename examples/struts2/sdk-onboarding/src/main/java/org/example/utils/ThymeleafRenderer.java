package org.example.utils;

import jakarta.servlet.http.HttpServletResponse;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import java.util.Map;
import java.util.Objects;

/**
 * Thymeleaf Configuration
 * Utility class that configures the Thymeleaf template engine and provides
 * a static method to render HTML files with dynamic variables writing the
 * result directly to the response (e.g., to display it on a web page)
 */
public class ThymeleafRenderer {
    private static final Logger logger = LogManager.getLogger(ThymeleafRenderer.class);
    // Instance of the Thymeleaf template engine
    private static final TemplateEngine templateEngine = new TemplateEngine();

    // Static initializer block: runs once when the class is loaded
    static {
        // Create a template resolver that loads templates from:
        // src/main/resources/templates/
        ClassLoaderTemplateResolver resolver = new ClassLoaderTemplateResolver();
        resolver.setPrefix("templates/");
        resolver.setSuffix(".html");
        resolver.setTemplateMode("HTML");
        resolver.setCharacterEncoding("UTF-8");
        // Create a new TemplateEngine and assign the configured resolver
        templateEngine.setTemplateResolver(resolver);
    }

    /**
     * Renders a Thymeleaf template.
     *
     * @param templateName The name of the template file (without extension)
     */
    public static void render(String templateName) {
        Objects.requireNonNull(templateName, "Template must not be null");
        render(templateName, null);
    }

    /**
     * Renders a Thymeleaf template.
     *
     * @param templateName The name of the template file (without extension)
     * @param container A map with the objets to render in the HTML.
     */
    public static void render(String templateName, Map<String, Object> container) {
        Objects.requireNonNull(templateName, "Template must not be null");
        // Creates a context to print the variables in the HTML template
        Context context = new Context();
        if(container != null) {
            context.setVariables(container);
        }
        // Get the current HTTP response object
        HttpServletResponse response = ServletActionContext.getResponse();
        response.setContentType("text/html;charset=UTF-8");

        try {
            // Render the template using Thymeleaf and write it to the response
            templateEngine.process(templateName, context, response.getWriter());
        } catch(Exception ex) {
            logger.error("error processing {}", templateName, ex);
        }
    }
}