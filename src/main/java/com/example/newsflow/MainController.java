package com.example.newsflow;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {

    private NewsFeed newsFeed;

    @GetMapping("/")
    @CrossOrigin(origins = "*")
    public List<NewsPaper> showSomething() {

        List<NewsPaper> newsPapers = new ArrayList<>();

        NewsFeed newsFeed = new NewsFeed();

        NewsPaper expressen = new NewsPaper("https://feeds.expressen.se/nyheter/", newsFeed);
        expressen.setName("Expressen");
        NewsPaper aftonbladet = new NewsPaper("http://www.aftonbladet.se/rss.xml", newsFeed);
        aftonbladet.setName("Aftonbladet");
        NewsPaper svd = new NewsPaper("https://www.svd.se/?service=rss", newsFeed);
        svd.setName("Svenska Dagbladet");

        newsFeed.notifyObservers();

        newsPapers.add(expressen);
        newsPapers.add(aftonbladet);
        newsPapers.add(svd);


        return newsPapers;
    }


}
