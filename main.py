from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='static_site')

@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
