
from flask import Flask, render_template, flash, jsonify
import os
from jinja2 import StrictUndefined


app = Flask(__name__)

app.jinja_env.undefined = StrictUndefined
app.secret_key = os.environ["secret_key"]





@app.route('/')
def homepage():
    """Display homepage."""

    return render_template("index.html")




if __name__ == "__main__":

    app.run(host="0.0.0.0")









