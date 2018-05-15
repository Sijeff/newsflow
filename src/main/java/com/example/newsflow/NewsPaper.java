package com.example.newsflow;

import com.example.newsflow.RSSCommunication.Feed;
import com.example.newsflow.RSSCommunication.Item;
import com.example.newsflow.RSSCommunication.RSSFeedParser;

import java.util.List;

public class NewsPaper implements Observer, DisplayFeed {

    private String url;
    private List<Item> items;
    private Subject newsFeed;

    public NewsPaper(String url, Subject newsFeed) {
        newsFeed.registerObserver(this);
        this.url = url;
    }

    @Override
    public void update() {

        // Magic feed parser
        RSSFeedParser parser = new RSSFeedParser(url);
        Feed feed = parser.readFeed();
        System.out.println(feed);

        // Copy fetched list of items to instanced list of items
        items = feed.getItems();

        display();
    }

    @Override
    public void display() {
        for (Item item : items) {
            System.out.println(item.getTitle());
            System.out.println(item.getDescription());
            System.out.println(item.getLink());
            System.out.println();
        }
    }
}
