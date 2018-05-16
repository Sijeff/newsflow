package com.example.newsflow;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MainController {

    private NewsFeed newsFeed;

    @GetMapping("/")
    @CrossOrigin(origins = "*")
    public NewsPaper showSomething() {

        NewsFeed newsFeed = new NewsFeed();
        NewsPaper expressen = new NewsPaper("https://feeds.expressen.se/nyheter/", newsFeed);
        newsFeed.notifyObservers();

        return expressen;
    }


}
