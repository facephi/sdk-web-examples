package org.example.actions;

import org.apache.struts2.ActionSupport;
import org.example.utils.ConfigLoader;
import org.example.utils.ThymeleafRenderer;

import java.util.HashMap;
import java.util.Map;

public class IndexAction extends ActionSupport {

    @Override
    public String execute() {
        // Get the api key from the .env file
        Map<String, Object> container = new HashMap<>();
        container.put("apiKey", ConfigLoader.getApiKey());

        ThymeleafRenderer.render("index", container);

        // As Thymeleaf is used as render, there is no reason to use
        // the result SUCCESS from struts2; this also avoid COMMITTED errors
        // from the response.getWriter() in the ThymeleafRender.java
        return null;
    }
}