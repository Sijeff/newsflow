package com.example.newsflow;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MainController {

    private NewsFeed newsFeed;

    @GetMapping("/")
    public String showSomething() {
        return "HEJHEJHEJ";
    }


}
