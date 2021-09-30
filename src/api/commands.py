import click
from flask import Flask

from api.news_scrape import dailyMothNewsURL_news_scrape 
from api.news_scrape import deafnewstoday_news_scrape 

from api.events_scrape import bslURL_events_scrape 
from api.events_scrape import aslURL_events_scrape 


def initialize_commands(app): 
    @app.cli.command("newsscrape")
    def newsscrape():
        print("NewScrape in the commands dot py")
        dailyMothNewsURL_news_scrape()
        deafnewstoday_news_scrape()
    @app.cli.command("eventsscrape")
    def eventsscrape():
        print("EventScrape in the commands dot py")        
        bslURL_events_scrape()
        aslURL_events_scrape()
    
    
    # def scrape(site): if you want to use sites



