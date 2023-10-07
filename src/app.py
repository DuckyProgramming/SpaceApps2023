from flask import Flask
from load_from_api import APIConnection

app = Flask(__name__)
conn = APIConnection()

@app.route("/")
def index():
    return "hello, world!"

@app.route("/data")
def data():
    return {
        'Name': "geek",
        "Age": "22",
        "programming": "python"
    }