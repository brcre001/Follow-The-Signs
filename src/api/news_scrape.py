############################ NEW SCRAPE ##########################################

### INSTRUCTIONS FOUND AT ###
# https://realpython.com/beautiful-soup-web-scraper-python/

dailyNewsURL = "https://www.dailymoth.com/blog/monday-september-13-top-stories" WORKED 

page = requests.get(dailyNewsURL)
page_text= page.text

body = page_text.find("<body>") + len("<body>")
head = page_text.find("<head>") + len("<head>")

####### IMAGE FIND #######

daily_moth_start_index = []



style="background-image: url("https://i.ytimg.com/vi/6Bk2aTncZPU/sddefault.jpg");"


spaceInFrontOfImgTitle = page_text.find("< title>") + len("< title>")
spaceInBackOfImgTitle = page_text.find("<title >") + len("<title >")
noSpaceInImgTitle = page_text.find("<title>") + len("<title>")


if spaceInFrontOfImgTitle < noSpaceInJobsTitle:
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
