
from flask import Flask, render_template
import os
from jinja2 import StrictUndefined


app = Flask(__name__)

app.jinja_env.undefined = StrictUndefined
app.secret_key = os.environ["secret_key"]





@app.route('/')
def homepage():
    """Display homepage."""

    return render_template("index.html")

@app.route('/<path>')
def route(path):

    return render_template('index.html')


@app.route('/<path>/<code>')
def nested_route(path, code):

    return render_template('index.html')



if __name__ == "__main__":

    app.run(host="0.0.0.0")









