
# import app
from urllib.request import urlopen #  Py Lib Tools for working with URLs
import re # Regular Expression Module 
import requests
# from flask import Flask, request, jsonify, url_for, Blueprint
# from api.models import db, News
# from models import db, News
from bs4 import BeautifulSoup



############################ BSL EVENTS SCRAPE ##########################################
def bslURL_events_scrape (): 

    bslURLs = [
    "https://bda.org.uk/category/events/",
    "https://thelowry.com/whats-on/access/british-sign-language-bsl/"
    ] 
    for url in bslURLs:
        # html = requests.get(b).text
        bsl_events_url =  url
        bsl_events_url_page = requests.get(url)
        bsl_events_url_page_text = bsl_events_url_page.text
        bsl_events_url_Soup = BeautifulSoup(bsl_events_url_page.content, "html.parser")
        all_items = ""
        if bslURLs.index(url) == 0:
            all_items = bsl_events_url_Soup.find_all("article", class_="post")
            for item in all_items:
                 ## GETTING THE TITLE ## 
                item_title = item.find("h4", class_="entry-title")
                if item_title is None:
                    continue
                item_title = item_title.get_text().replace('\n', '')
                print(item_title)
                #### FINDING THE LINKS ####
                item_link = item.find("a").get("href")
                img_link = item.find("img").get("src")
                print(item_link)
                print(img_link)
                print("#######################")

        if bslURLs.index(url) == 1:
            all_items = bsl_events_url_Soup.find_all("div", class_="o-layout__item")
            for item in all_items:
                 ## GETTING THE TITLE ## 
                item_title = item.find("h4", class_="c-col-title")
                if item_title is None:
                    continue
                print(item_title.get_text())
                #### FINDING THE LINKS ####
                item_link = item.find("a").get("href")
                print(item_link)
                img_links = item.find("img").get("src")
                img_links = img_links.replace('-16x10.jpg', ".jpg")
                print(img_links)
                print("#######################")



        # print(all_items)

        number_of_items = len(all_items)
        print(number_of_items)


# # FOR TESTING # 
bslURL_events_scrape()


############################ ASL SCRAPE ##########################################

def bslURL_events_scrape (): 

    bslURLs = [
    "https://bda.org.uk/category/events/",
    "https://thelowry.com/whats-on/access/british-sign-language-bsl/"
    ] 
    for url in bslURLs:
        # html = requests.get(b).text
        bsl_events_url =  url
        bsl_events_url_page = requests.get(url)
        bsl_events_url_page_text = bsl_events_url_page.text
        bsl_events_url_Soup = BeautifulSoup(bsl_events_url_page.content, "html.parser")
        all_items = ""
        if bslURLs.index(url) == 0:
            all_items = bsl_events_url_Soup.find_all("article", class_="post")
            for item in all_items:
                 ## GETTING THE TITLE ## 
                item_title = item.find("h4", class_="entry-title")
                if item_title is None:
                    continue
                item_title = item_title.get_text().replace('\n', '')
                print(item_title)
                #### FINDING THE LINKS ####
                item_link = item.find("a").get("href")
                img_link = item.find("img").get("src")
                print(item_link)
                print(img_link)
                print("#######################")

        if bslURLs.index(url) == 1:
            all_items = bsl_events_url_Soup.find_all("div", class_="o-layout__item")
            for item in all_items:
                 ## GETTING THE TITLE ## 
                item_title = item.find("h4", class_="c-col-title")
                if item_title is None:
                    continue
                print(item_title.get_text())
                #### FINDING THE LINKS ####
                item_link = item.find("a").get("href")
                print(item_link)
                img_links = item.find("img").get("src")
                img_links = img_links.replace('-16x10.jpg', ".jpg")
                print(img_links)
                print("#######################")



        # print(all_items)

        number_of_items = len(all_items)
        print(number_of_items)


# # FOR TESTING # 
aslURL_events_scrape()

