package com.example.newsflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NewsflowApplication {

	public static void main(String[] args) {

		SpringApplication.run(NewsflowApplication.class, args);

		NewsFeed newsFeed = new NewsFeed();

		NewsPaper expressen = new NewsPaper("https://feeds.expressen.se/nyheter/", newsFeed);
		expressen.setName("Expressen");

		newsFeed.notifyObservers();
	}
}
