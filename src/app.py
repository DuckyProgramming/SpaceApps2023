from flask import Flask
from load_from_api import APIConnection

app = Flask(__name__)
conn = APIConnection()

@app.route("/")
def index():
    conn.getFireInCountry("USA")
    return "hello, world!"

@app.route("/data")
def data():
    return conn.checkUses()
