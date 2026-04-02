from flask import Flask, render_template

app = Flask(__name__)

DICTIONARY_URL = "http://dict.samudev.xyz"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/programms")
def programms():
    return render_template("programms.html", dictionary_url=DICTIONARY_URL)

@app.route("/projects")
def projects():
    return render_template("projects.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
