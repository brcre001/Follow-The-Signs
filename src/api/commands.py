import click
from flask import Flask
from api.news_scrape import dailyMothNewsURL_news_scrape 
from api.news_scrape import deafnewstoday_news_scrape 


def initialize_commands(app): 
    @app.cli.command("scrape")
    def scrape():
        print("This is the commands dot py")
        dailyMothNewsURL_news_scrape()
        deafnewstoday_news_scrape()
    # def scrape(site): if you want to use sites



