import click
from flask import Flask

def initialize_commands(app): 
    @app.cli.command("scrape")
    def scrape(site):
        print("Hello World")






