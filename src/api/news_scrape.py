
from urllib.request import urlopen #  Py Lib Tools for working with URLs
import re # Regular Expression Module 
import requests
# from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, News
from bs4 import BeautifulSoup

############################ MOTH NEWS SCRAPE ##########################################
def dailyMothNewsURL_news_scrape (): 
    dailyMothNewsURL = "https://www.dailymoth.com/blog?category=DEAF%20NEWS" 
    dailyMothNewsPage = requests.get(dailyMothNewsURL)
    dailyMothNewsPage_text= dailyMothNewsPage.text
    dailyMothNewsSoup = BeautifulSoup(dailyMothNewsPage.content, "html.parser")


    # job_elements = results.find_all("div", class_="card-content")

    # all_articles = dailyMothNewsSoup.find("section", class_="Main-content")

    # print(all_articles)

    all_items = dailyMothNewsSoup.find_all("article", class_="BlogList-item")

    number_of_items = len(dailyMothNewsSoup.find_all("article", class_="BlogList-item"))

    print(number_of_items)


    ## GETTING THE TITLE ## 
    for item in all_items:
        item_title = item.find("a", class_="BlogList-item-title")
        print(item_title.text.strip())
        the_title = item_title.text.strip()
        # item_titles_array.append(item_title.text.strip())
        print("#######################")
        #### FINDING THE LINKS ####
        item_links = item.find_all("a")
        for all_links in item_links:
            img_link = all_links.find("img")
            if img_link is None:
                continue
            single_img_link = img_link.get("data-src")
            print(single_img_link)
            print("#######################")
            page_path = all_links.get("href")
            page_link = f'https://www.dailymoth.com/{page_path}'
            print(f'https://www.dailymoth.com/{page_path}')
        print("#######################")
        news = News(
            title=the_title, 
            imageURL=single_img_link, 
            pageURL=page_link)
        print(news)
        print("#######################")
        db.session.add(news)
        db.session.commit()
