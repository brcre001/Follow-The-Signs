
import app
from urllib.request import urlopen #  Py Lib Tools for working with URLs
import re # Regular Expression Module 
import requests
# from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, News
# from models import db, News

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
        single_img_link = ""
        page_link = ""
        for all_links in item_links:
            img_link = all_links.find("img")
            if img_link is None:
                continue
            single_img_link = img_link.get("data-src")
            print(single_img_link)
            print("#######################")
            #### FINDING THE PATH ####
            page_path = all_links.get("href")
            page_link = f'https://www.dailymoth.com/{page_path}'
            print(f'https://www.dailymoth.com/{page_path}')
        print("#######################")
        already = News.query.filter_by(title=the_title).first()
        if already is not None:
            continue
        news = News(
            title= the_title, 
            imageURL= single_img_link, 
            pageURL= page_link)
        print(news)
        print("#######################")
        db.session.add(news)
        db.session.commit()

# # FOR TESTING # 
# dailyMothNewsURL_news_scrape()


############################ DEAF NEWS TODAY SCRAPE ##########################################

def deafnewstoday_news_scrape (): 
    deafnewstodayURL = "http://deafnewstoday.com/"  # THIS SITE REDIRECTS TO WIX AND DOESN'T SHOW ALL THE INFO 
    deafnewstodayURLwix = "http://stephengoforth.wixsite.com/my-site"
    deafnewstodayPAGE = requests.get(deafnewstodayURLwix)
    deafnewstodayPage_text= deafnewstodayPAGE.text
    deafnewstodaySOUP = BeautifulSoup(deafnewstodayPAGE.content, "html.parser")

    # print(deafnewstodayPage_text)

    ## TESTING ## THIS WORKED  
    # all_articles = deafnewstodaySOUP.find("div", class_="pro-gallery")

    all_articles = deafnewstodaySOUP.find_all("div", class_="gallery-item-container")

    # pretty_articles = all_articles.prettify()

    # print(all_articles)

    # all_items = deafnewstodaySOUP.find_all("article", class_="BlogList-item")

    number_of_items = len(deafnewstodaySOUP.find_all("div", class_="gallery-item-container"))

    print(number_of_items)


    for item in all_articles:
        #### FINDING THE TITLE ####
        item_title_section = item.find_all("h2", class_="_2mRxN")
        the_title = ''
        single_img_link = ''
        page_link = ''
        for some_title in item_title_section:
            item_title = some_title.find("div", class_="blog-post-homepage-title-color")
            print(item_title.text.strip())
            the_title = item_title.text.strip()
            print("#######################")
        #### FINDING THE LINKS ####
        for img_link in item.find_all("img", class_="gallery-item-visible"): 
            if img_link is None:
                continue
            print(img_link['src'])
            single_img_link = img_link.get('src')
            print("#######################")
        #### FINDING THE PATH ####
        # print(all_articles[0].prettify())
        page_path_section = item.find("div", class_="bmMd1")
        # print(page_path_section)
        find_all_href = page_path_section.find_all("a", href=True)
        # print(find_all_href)
        for page_path in find_all_href:
            # print(page_path)
            page_link = page_path['href']
            print(page_link)
            print("#######################")
        already = News.query.filter_by(title=the_title).first()
        if already is not None:
            continue
        news = News(
            title=the_title, 
            imageURL=single_img_link, 
            pageURL=page_link)
        print(news)
        db.session.add(news)
        db.session.commit()


# # FOR TESTING # 
# deafnewstoday_news_scrape()

