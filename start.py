from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/hello")  #127.0.0.1
def hello_world():
    return "<p> Hello World</p>"

@app.route('/')  #127.0.0.1/css/b.css
def index():
    return send_from_directory('html', 'index.html') #127.0.0.1/html/css/b.css

@app.route('/<path:name>')  
def start(name):
    return send_from_directory('html', name) #127.0.0.1/html/css/b.css
