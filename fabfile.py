# Main fabfile for my simple blog

from flask import (
    Flask,
    render_template,
    send_from_directory
)
from flask.views import View

class IndexView(View):
    """
    Basic view, nothing fancy
    """
    def dispatch_request(self):
        return render_template('index.html')

class ApiView(View):
    """
    Render static json file
    """
    def dispatch_request(self, filename):
        """
        Final rendering
        """
        return send_from_directory("./api/", filename)

def serve():
    """
    Serve static pages using flask app
    """
    app = Flask(__name__, template_folder='.')
    app.add_url_rule("/", view_func=IndexView.as_view('index'))
    app.add_url_rule("/api/<path:filename>", view_func=ApiView.as_view('api'))
    app.run(debug=True)