import sendgrid
import os
from sendgrid.helpers.mail import Mail, Email, To, Content
# from api.models import db, User
def send_mail(to_email,subject,content):
    sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
    from_email = Email("followthesignshelper@gmail.com")  # Change to your verified sender
    to_email = To(to_email)  # Change to your recipient
    content = Content("text/plain", content)
    mail = Mail(from_email, to_email, subject, content)

    # Get a JSON-ready representation of the Mail object
    mail_json = mail.get()

    # Send an HTTP POST request to /mail/send
    response = sg.client.mail.send.post(request_body=mail_json)
    print(response.status_code)
    print(response.headers)
    # print("hello")
    return response