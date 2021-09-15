from urllib.request import urlopen #  Py Lib Tools for working with URLs
import re # Regular Expression Module 
import requests
# from flask import Flask, request, jsonify, url_for, Blueprint

# api = Blueprint('api', __name__)


##  https://realpython.com/python-web-scraping-practical-introduction/ ##

# Declare Webpage : 
testurl = "http://olympus.realpython.org/profiles/aphrodite"

# Open Web Page : 
testPage = urlopen(testurl)

# object’s .read() method, which returns a sequence of bytes.
html_bytes = testPage.read()
# Then use .decode() to decode the bytes to a string using UTF-8:
html = html_bytes.decode("utf-8")

# Print Entire Page: 
# print(html)

## HOW TO GET A TITLE OF A PAGE ## 
title_index = html.find("<title>")
# print(title_index)

title_start_index = title_index + len("<title>")
# print(title_start_index)

title_end_index = html.find("</title>")
# print(title_end_index)

title = html[title_start_index:title_end_index]
print("This is the first example: " + title)


##################### TEST YOUR SKILLS ###########################
# The below URL has space in the title, try to code a way to find it and use the index

url = "http://olympus.realpython.org/profiles/poseidon"
page = urlopen(url)
html = page.read().decode("utf-8")


spaceInFrontOfIndex = "< title>"
spaceInBackOfIndex = "<title >"
start_index = 0

if spaceInFrontOfIndex in html:
    start_index = html.find("< title>") + len(spaceInFrontOfIndex)
if spaceInBackOfIndex in html:
    start_index = html.find("<title >") + len(spaceInBackOfIndex)
else:
    start_index = html.find("<title>") + len("<title>")

end_index = html.find("</title>") 

title = html[start_index:end_index]
print("This is the title in the Test: " + title)

############################ NEW SCRAPE ##########################################

### INSTRUCTIONS FOUND AT ###
# https://realpython.com/beautiful-soup-web-scraper-python/

JOBSURL = "https://realpython.github.io/fake-jobs/" # WORKED 
# JOBSURL = "http://olympus.realpython.org/profiles/poseidon" WORKED 
# JOBSURL = "http://olympus.realpython.org/profiles/aphrodite" WORKED 

page = requests.get(JOBSURL)
page_text= page.text

body = page_text.find("<body>") + len("<body>")
head = page_text.find("<head>") + len("<head>")

####### JOBS FIND #######

## EXAMPLE OF HOW TO USE STRING
##        : string.find('+',7)
## Explanation: 
## string.find('what to find', after what?)

jobs_start_index = 0

spaceInFrontOfJobsTitle = page_text.find("< title>") + len("< title>")
spaceInBackOfJobsTitle = page_text.find("<title >") + len("<title >")
noSpaceInJobsTitle = page_text.find("<title>") + len("<title>")


if spaceInFrontOfJobsTitle < noSpaceInJobsTitle:
    jobs_start_index = noSpaceInJobsTitle
else:
    jobs_start_index = spaceInFrontOfJobsTitle

if spaceInBackOfJobsTitle < noSpaceInJobsTitle:
    jobs_start_index = noSpaceInJobsTitle
else:
    jobs_start_index = spaceInBackOfJobsTitle

jobs_end_index = 0 
endOfJobsTitleFrontSpace = page_text.find("< /title>")
endOfJobsTitleBackSpace = page_text.find("</title >")
endOfJobsTitleNoSpace = page_text.find("</title>")

if endOfJobsTitleFrontSpace < endOfJobsTitleNoSpace:
    jobs_end_index = endOfJobsTitleNoSpace
else:
    jobs_end_index = endOfJobsTitleFrontSpace

if endOfJobsTitleBackSpace < endOfJobsTitleNoSpace:
    jobs_end_index = endOfJobsTitleNoSpace
else:
    jobs_end_index = endOfJobsTitleBackSpace

## TESTING ## 
# print(spaceInFrontOfJobsTitle)
# print(spaceInBackOfJobsTitle)
# print(noSpaceInJobsTitle)

## CHECKING ## 
# print(jobs_start_index)
# print(jobs_end_index)

jobstitle = page_text[jobs_start_index:jobs_end_index]
print("This is the title tested against ALL sites: " + jobstitle)



#################### Step 3:  ##################
#####  Parse HTML Code With Beautiful Soup #####
################################################

## STILL USING THIS PAGE: ## 
## https://realpython.com/beautiful-soup-web-scraper-python/

## import requests - Already Imported ## 
from bs4 import BeautifulSoup

URL = "https://realpython.github.io/fake-jobs/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

# Note: You’ll want to pass page.content instead of page.text to avoid problems with character encoding. The .content attribute holds raw bytes, which can be decoded better than the text representation you printed earlier using the .text attribute.


results = soup.find(id="ResultsContainer")

## This will get ALL the ResultsContainer: 
# (Spoiler alert, it's a lot of info)
# print(results.prettify())


####### Find Elements by HTML Class Name ####### 
# Here we find just the cards with job listings of the page : 

# THIS COMMAND WILL GET ~ALL~  
job_elements = results.find_all("div", class_="card-content")

# THIS COMMAND WILL GET ~ONE~ (the first one) 
first_job_elements = results.find("h2", class_="title")

array_of_job_elements = []
# print(first_job_elements)
for i in job_elements:
    title_start_index = i.find("<title>")
    title_end_index = i.find("</title>")

# print(title_end_index)

    title = html[title_start_index:title_end_index]
    print("This is the first example: " + title)
    news = News(title=title, description=description, imageURL=imageURL, category=category)
    db.session.add(news)
    db.session.commit()
    # if i not in array_of_job_elements:
    #     array_of_job_elements.append(i)

# print(job_elements)
print("#######################1")
# print(array_of_job_elements[0])
print("#######################")
# body = list(html.children)[3]
# print(single_job_elements)

# print("#######################")
# print(len(array_of_job_elements))
# print("#######################")
# print(array_of_job_elements[0])
# print("#######################")
# print(array_of_job_elements[1])
# print("#######################")
# print(array_of_job_elements[3])
# print("#######################")

# @api.route('/news', methods=['GET'])
# def example():
#     data = {
#         'robotNames': ['Wall-E', 'Bender', 'Rosie']
#     }
#     return render_template('index.html', data=data)











