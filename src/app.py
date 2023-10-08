from flask import Flask, request, jsonify
from flask_cors import CORS
from load_from_api import APIConnection


class CurrentSelected:
    def __init__(self, val = None):
        self.value = val


app = Flask(__name__)
CORS(app)
conn = APIConnection()
current = CurrentSelected(conn.getFireInCountry("United States"))


@app.route("/")
def index():
    return "hello, world!"


@app.route("/check-uses")
def data():
    return conn.checkUses()


@app.route("/current-selected")
def current_selected():
    return current.value


@app.route("/specify", methods=["POST"], strict_slashes=False)
def specify():
    country = request.get_json()
    current.value = conn.getFireInCountry(country['country'])
    return current.value

