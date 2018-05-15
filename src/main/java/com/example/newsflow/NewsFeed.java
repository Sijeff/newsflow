package com.example.newsflow;

import com.example.newsflow.RSSCommunication.Item;

import java.util.ArrayList;
import java.util.List;

public class NewsFeed implements Subject {

    private ArrayList observers;
    private List<Item> items;

    public NewsFeed() {
        observers = new ArrayList();
    }

    public void registerObserver(Observer o) {
        observers.add(o);
    }

    public void removeObserver(Observer o) {
        int i = observers.indexOf(o);
        if (i >= 0) {
            observers.remove(i);
        }
    }

    public void notifyObservers() {
        for (int i = 0; i < observers.size(); i++) {
            Observer observer = (Observer)observers.get(i);
            observer.update();
        }
    }
}
