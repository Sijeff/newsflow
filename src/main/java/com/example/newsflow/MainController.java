package com.example.newsflow;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MainController {

    private NewsFeed newsFeed;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    @CrossOrigin(origins = "*")
    public String showSomething() {
        return "HEJHEJHEJ";
    }


}
