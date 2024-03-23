from flask import Flask, render_template
from secret import api_keys

app = Flask(__name__)

@app.route("/")
def hello_world():
    # return "<p>Hello, World!</p>"
    return render_template("app.html", name = "Devang")